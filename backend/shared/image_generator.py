"""On-Demand Image Studio Engine.

Synthesizes tailored image generation prompts from investigated news dossiers
using Gemini 3.8 Flash and generates high-fidelity editorial imagery using Google's Imagen 3.
"""

from __future__ import annotations

import base64
import datetime
import json
import os
import re
import time
import uuid
from typing import Any, Dict, List, Optional

from shared.config import (
    GEMINI_API_KEY,
    IS_SIMULATION_MODE,
    MODEL_AGENT_FAST,
    MODEL_IMAGE,
    MODEL_IMAGEN,
    logger,
)

STYLE_PRESETS: Dict[str, Dict[str, str]] = {
    "photojournalism": {
        "title": "Frontline Photojournalism",
        "description": "Authentic newsroom documentary photograph, 35mm lens, natural editorial lighting, Reuters/AP style.",
        "suffix": ", photojournalism, authentic news photograph, 35mm lens, natural candid lighting, high journalistic realism, 8k resolution, editorial press photography",
    },
    "magazine_cover": {
        "title": "Editorial Magazine Cover",
        "description": "Metaphorical, thought-provoking editorial art inspired by The Economist and TIME covers.",
        "suffix": ", editorial cover illustration, sophisticated visual metaphor, The Economist style, conceptual, bold artistic composition, premium print finish",
    },
    "isometric_3d": {
        "title": "3D Isometric & Technical",
        "description": "Clean, modern 3D render visualizing industrial, technological, or systemic infrastructure.",
        "suffix": ", clean 3D isometric render, blender cycles style, technical cutaway visualization, soft ambient occlusion, volumetric lighting, 4k detail",
    },
    "cinematic": {
        "title": "Cinematic Film Still",
        "description": "16:9 dramatic widescreen scene, anamorphic lens flare, shallow depth of field, atmospheric mood.",
        "suffix": ", cinematic film still, 70mm anamorphic lens, shallow depth of field, atmospheric haze, dramatic directional lighting, movie still, masterpiece",
    },
    "minimalist": {
        "title": "Minimalist Graphic Metaphor",
        "description": "Bold shapes, flat vector aesthetics, clean Swiss typography layout, striking visual economy.",
        "suffix": ", modern minimalist vector illustration, flat design, Swiss graphic design aesthetic, high contrast, clean shapes, elegant visual economy",
    },
}

SUPPORTED_ASPECT_RATIOS = ["16:9", "1:1", "4:3", "9:16"]


def generate_editorial_image_prompts(analysis: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Synthesizes 5 diverse image prompts grounded in the active dossier."""
    topic = analysis.get("topic", "News Investigation")
    summary = analysis.get("executive_summary", "")
    metrics = analysis.get("key_metrics_and_numbers", [])
    consensus = analysis.get("consensus_points", [])

    system_instruction = (
        "You are an elite art director and photo editor at an international news magazine. "
        "Your task is to analyze the provided investigative news dossier and create 5 distinct, highly compelling "
        "image generation prompts engineered for Google Imagen 3.\n\n"
        "Return a strictly valid JSON array of 5 prompt suggestion objects with the following schema:\n"
        "[\n"
        "  {\n"
        "    \"concept_title\": \"Brief punchy title for this visual angle\",\n"
        "    \"style_name\": \"photojournalism | magazine_cover | isometric_3d | cinematic | minimalist\",\n"
        "    \"prompt_text\": \"Extremely detailed, visually descriptive prompt describing subject, composition, lighting, environment, and mood for Imagen 3 without buzzwords like photorealistic\",\n"
        "    \"recommended_aspect_ratio\": \"16:9 | 1:1 | 4:3 | 9:16\"\n"
        "  }\n"
        "]"
    )

    grounding_context = (
        f"TOPIC: {topic}\n"
        f"EXECUTIVE SUMMARY: {summary}\n"
        f"KEY NUMBERS: {', '.join(metrics[:4])}\n"
        f"CONSENSUS FACTS: {', '.join(consensus[:3])}\n"
    )

    if not IS_SIMULATION_MODE and GEMINI_API_KEY:
        try:
            from google import genai
            from google.genai import types

            client = genai.Client(api_key=GEMINI_API_KEY)
            resp = client.models.generate_content(
                model=MODEL_AGENT_FAST,
                contents=f"Create 5 editorial image prompts for this topic:\n\n{grounding_context}",
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction,
                    response_mime_type="application/json",
                    temperature=0.4,
                ),
            )
            raw = resp.text or "[]"
            data = json.loads(raw)
            if isinstance(data, list) and len(data) > 0:
                return data
        except Exception as e:
            logger.warning("Gemini prompt generation failed (%s). Falling back to structured templates.", e)

    # Deterministic fallback prompts grounded in the topic
    return _build_simulated_prompts(topic, summary)


def _build_simulated_prompts(topic: str, summary: str) -> List[Dict[str, Any]]:
    """Builds deterministic, high-quality prompt templates."""
    return [
        {
            "concept_title": "On-the-Record Press Room",
            "style_name": "photojournalism",
            "prompt_text": f"A high-stakes press conference addressing {topic}, documentary photography, reporters with microphones raised towards an illuminated podium, candid tension, authentic newsroom atmosphere, natural overhead fluorescent lighting, shallow depth of field, 35mm lens.",
            "recommended_aspect_ratio": "16:9",
        },
        {
            "concept_title": "Symbolic Editorial Cover",
            "style_name": "magazine_cover",
            "prompt_text": f"A conceptual editorial illustration representing the global debate around {topic}, a central visual metaphor split between technological progress and ethical caution, sophisticated color palette of navy, gold, and crimson, The Economist cover style, clean graphic composition.",
            "recommended_aspect_ratio": "1:1",
        },
        {
            "concept_title": "Technical Systems Breakdown",
            "style_name": "isometric_3d",
            "prompt_text": f"Detailed isometric 3D render visualizing the core operational and policy infrastructure of {topic}, glowing data nodes, clean glass and matte metallic materials, soft ambient occlusion, clean white background, architectural cross-section.",
            "recommended_aspect_ratio": "16:9",
        },
        {
            "concept_title": "Cinematic Milestone Still",
            "style_name": "cinematic",
            "prompt_text": f"Cinematic widescreen wide-angle view depicting the strategic impact of {topic}, dramatic low-angle shot, atmospheric golden hour rim light, volumetric dust particles, anamorphic lens flares, ultra-sharp detail, cinematic color grading.",
            "recommended_aspect_ratio": "16:9",
        },
        {
            "concept_title": "Minimalist Visual Thesis",
            "style_name": "minimalist",
            "prompt_text": f"Minimalist conceptual art for {topic}, bold geometric silhouettes, contrasting complementary colors, Swiss style layout, high aesthetic balance, zero clutter, powerful symbolic simplicity.",
            "recommended_aspect_ratio": "4:3",
        },
    ]


def generate_image_with_imagen(
    prompt: str,
    style: str = "photojournalism",
    aspect_ratio: str = "16:9",
    negative_prompt: Optional[str] = None,
) -> bytes:
    """Generates an image using Google Gen AI (Gemini 3.1 Flash Image / Imagen 3) and returns JPEG bytes."""
    # Ensure aspect ratio is supported
    if aspect_ratio not in SUPPORTED_ASPECT_RATIOS:
        aspect_ratio = "16:9"

    # Enhance prompt with style directive if not already included
    style_info = STYLE_PRESETS.get(style, STYLE_PRESETS["photojournalism"])
    enhanced_prompt = prompt.strip()
    if not any(kw in enhanced_prompt.lower() for kw in ["photojournalism", "illustration", "3d render", "cinematic", "minimalist"]):
        enhanced_prompt = f"{enhanced_prompt}{style_info['suffix']}"

    if negative_prompt and negative_prompt.strip():
        enhanced_prompt = f"{enhanced_prompt} Avoid: {negative_prompt.strip()}."

    if not IS_SIMULATION_MODE and GEMINI_API_KEY:
        try:
            from google import genai
            from google.genai import types

            client = genai.Client(api_key=GEMINI_API_KEY)

            # Strategy 1: Google Gen AI Image Models via generate_content (Developer API native)
            candidate_models = [
                MODEL_IMAGE,
                "gemini-3.1-flash-image",
                "gemini-2.5-flash-image",
            ]
            seen = set()
            models_to_try = [m for m in candidate_models if m and not (m in seen or seen.add(m))]

            for img_model in models_to_try:
                try:
                    logger.info("Calling Google Gen AI image model '%s' (aspect_ratio=%s)...", img_model, aspect_ratio)
                    resp = client.models.generate_content(
                        model=img_model,
                        contents=enhanced_prompt,
                        config=types.GenerateContentConfig(
                            response_modalities=["IMAGE"],
                            image_config=types.ImageConfig(
                                aspect_ratio=aspect_ratio,
                            ),
                        ),
                    )

                    if resp.parts:
                        for part in resp.parts:
                            if part.inline_data and part.inline_data.data:
                                raw_data = part.inline_data.data
                                image_bytes = base64.b64decode(raw_data) if isinstance(raw_data, str) else raw_data
                                logger.info(
                                    "Google Image model '%s' successfully generated %d bytes of image data.",
                                    img_model,
                                    len(image_bytes),
                                )
                                return image_bytes
                except Exception as model_err:
                    logger.warning("Generation with '%s' failed: %s", img_model, model_err)

            # Strategy 2: Imagen 3 via generate_images (for Vertex AI / Gemini Enterprise Agent Platform mode)
            try:
                logger.info("Calling Imagen 3 ('%s') with aspect_ratio=%s...", MODEL_IMAGEN, aspect_ratio)
                resp = client.models.generate_images(
                    model=MODEL_IMAGEN,
                    prompt=enhanced_prompt,
                    config=types.GenerateImagesConfig(
                        number_of_images=1,
                        aspect_ratio=aspect_ratio,
                        output_mime_type="image/jpeg",
                    ),
                )

                if resp.generated_images and len(resp.generated_images) > 0:
                    image_bytes = resp.generated_images[0].image.image_bytes
                    logger.info("Imagen 3 successfully generated %d bytes of image data.", len(image_bytes))
                    return image_bytes
            except Exception as e_imagen:
                logger.warning("Imagen 3 generate_images failed: %s", e_imagen)

        except Exception as e:
            logger.warning("Google AI image generation pipeline failed (%s). Falling back to deterministic SVG generator.", e)

    # Simulation / Offline Fallback: Generate SVG graphic with rich visual composition
    return _build_simulated_image_bytes(enhanced_prompt, style, aspect_ratio)


def _build_simulated_image_bytes(prompt: str, style: str, aspect_ratio: str) -> bytes:
    """Generates a styled, responsive SVG graphic representing the image."""
    dim_map = {
        "16:9": (1280, 720),
        "1:1": (1000, 1000),
        "4:3": (1024, 768),
        "9:16": (720, 1280),
    }
    width, height = dim_map.get(aspect_ratio, (1280, 720))

    # Color palette based on style
    palettes = {
        "photojournalism": ("#0f172a", "#1e293b", "#38bdf8", "#f8fafc"),
        "magazine_cover": ("#1c1917", "#44403c", "#f59e0b", "#fef3c7"),
        "isometric_3d": ("#09090b", "#18181b", "#a855f7", "#faf5ff"),
        "cinematic": ("#022c22", "#064e3b", "#10b981", "#ecfdf5"),
        "minimalist": ("#172554", "#1e3a8a", "#60a5fa", "#eff6ff"),
    }
    bg1, bg2, accent, text_color = palettes.get(style, palettes["photojournalism"])

    # Sanitize prompt for SVG text display
    clean_prompt = prompt[:160].replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")

    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{bg1}" />
      <stop offset="100%" stop-color="{bg2}" />
    </linearGradient>
    <linearGradient id="accGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{accent}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="{accent}" stop-opacity="0.2" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="40" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />

  <!-- Abstract Aesthetic Shapes -->
  <circle cx="{width * 0.8}" cy="{height * 0.3}" r="{min(width, height) * 0.35}" fill="{accent}" opacity="0.12" filter="url(#glow)" />
  <circle cx="{width * 0.2}" cy="{height * 0.8}" r="{min(width, height) * 0.25}" fill="{accent}" opacity="0.08" filter="url(#glow)" />
  
  <!-- Subtle Grid Lines -->
  <line x1="0" y1="{height * 0.25}" x2="{width}" y2="{height * 0.25}" stroke="{accent}" stroke-opacity="0.08" stroke-width="1" />
  <line x1="0" y1="{height * 0.75}" x2="{width}" y2="{height * 0.75}" stroke="{accent}" stroke-opacity="0.08" stroke-width="1" />
  <line x1="{width * 0.33}" y1="0" x2="{width * 0.33}" y2="{height}" stroke="{accent}" stroke-opacity="0.08" stroke-width="1" />
  <line x1="{width * 0.66}" y1="0" x2="{width * 0.66}" y2="{height}" stroke="{accent}" stroke-opacity="0.08" stroke-width="1" />

  <!-- Central Visual Container Card -->
  <rect x="{width * 0.08}" y="{height * 0.12}" width="{width * 0.84}" height="{height * 0.76}" rx="24" fill="{bg2}" fill-opacity="0.4" stroke="{accent}" stroke-opacity="0.3" stroke-width="2" />

  <!-- Badge -->
  <g transform="translate({width * 0.12}, {height * 0.22})">
    <rect width="220" height="34" rx="17" fill="url(#accGrad)" />
    <text x="110" y="22" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="{text_color}" text-anchor="middle" letter-spacing="1">GOOGLE IMAGEN 3</text>
  </g>

  <!-- Title / Style Header -->
  <text x="{width * 0.12}" y="{height * 0.36}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="{max(24, int(min(width, height) * 0.055))}" font-weight="900" fill="{text_color}" letter-spacing="-0.5">
    {STYLE_PRESETS.get(style, {}).get('title', 'Editorial Visual')}
  </text>

  <!-- Prompt Quote Box -->
  <foreignObject x="{width * 0.12}" y="{height * 0.44}" width="{width * 0.76}" height="{height * 0.3}">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; font-size: {max(14, int(min(width, height) * 0.024))}px; line-height: 1.6; color: rgba(248, 250, 252, 0.85); font-style: italic; background: rgba(15, 23, 42, 0.6); padding: 18px 22px; border-radius: 12px; border-left: 4px solid {accent};">
      "{clean_prompt}..."
    </div>
  </foreignObject>

  <!-- Footer Information -->
  <text x="{width * 0.12}" y="{height * 0.82}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="600" fill="rgba(248, 250, 252, 0.6)">
    ASPECT RATIO: {aspect_ratio}  •  STYLE: {style.upper()}  •  AGENTIC NEWS VISUAL STUDIO
  </text>
</svg>"""

    return svg_content.encode("utf-8")
