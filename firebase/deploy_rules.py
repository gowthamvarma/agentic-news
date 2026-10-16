"""Automated Firestore Rules Deployment Script.

Deploys and releases firestore.rules using Google Cloud Rules API
without requiring interactive Firebase CLI browser login.
"""

import json
import os
import shutil
import subprocess
import sys
import urllib.request
from pathlib import Path


def find_gcloud() -> str:
    cmd = shutil.which("gcloud") or shutil.which("gcloud.cmd")
    if cmd:
        return cmd
    fallbacks = [
        r"C:\Users\Gowtham\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd",
        r"C:\Program Files (x86)\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd",
        r"C:\Program Files\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd",
        os.path.expanduser("~/google-cloud-sdk/bin/gcloud"),
        "/usr/bin/gcloud",
        "/usr/local/bin/gcloud",
    ]
    for fb in fallbacks:
        if os.path.isfile(fb):
            return fb
    return "gcloud"


def get_active_project(gcloud_bin: str) -> str:
    try:
        proc = subprocess.run([gcloud_bin, "config", "get-value", "project"], capture_output=True, text=True, check=True)
        return proc.stdout.strip()
    except Exception:
        return os.environ.get("FIREBASE_PROJECT_ID") or os.environ.get("GOOGLE_CLOUD_PROJECT") or ""


def get_auth_token(gcloud_bin: str) -> str:
    try:
        proc = subprocess.run([gcloud_bin, "auth", "print-access-token"], capture_output=True, text=True, check=True)
        return proc.stdout.strip()
    except Exception as e:
        print(f"Error getting gcloud access token: {e}", file=sys.stderr)
        sys.exit(1)


def deploy_firestore_rules(project_id: str, rules_file: Path):
    if not rules_file.exists():
        print(f"Error: Rules file not found at {rules_file}", file=sys.stderr)
        sys.exit(1)

    gcloud_bin = find_gcloud()
    if not project_id:
        project_id = get_active_project(gcloud_bin)
    if not project_id:
        print("Error: No GCP Project ID specified or detected in gcloud.", file=sys.stderr)
        sys.exit(1)

    print(f"Deploying Firestore rules to project: {project_id}...")
    token = get_auth_token(gcloud_bin)
    rules_content = rules_file.read_text(encoding="utf-8")

    # Step 1: Create Ruleset
    payload = {
        "source": {
            "files": [
                {
                    "name": rules_file.name,
                    "content": rules_content,
                }
            ]
        }
    }
    url_ruleset = f"https://firebaserules.googleapis.com/v1/projects/{project_id}/rulesets"
    req_ruleset = urllib.request.Request(
        url_ruleset,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "X-Goog-User-Project": project_id,
        },
    )

    try:
        with urllib.request.urlopen(req_ruleset) as resp:
            ruleset_data = json.loads(resp.read().decode())
            ruleset_name = ruleset_data.get("name")
            print(f"Created ruleset: {ruleset_name}")
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode()
        print(f"Failed to create ruleset (HTTP {e.code}): {err_msg}", file=sys.stderr)
        sys.exit(1)

    # Step 2: Release Ruleset to cloud.firestore
    release_name = f"projects/{project_id}/releases/cloud.firestore"
    url_patch = f"https://firebaserules.googleapis.com/v1/{release_name}"
    patch_body = {
        "release": {
            "name": release_name,
            "rulesetName": ruleset_name,
        }
    }
    patch_req = urllib.request.Request(
        url_patch,
        data=json.dumps(patch_body).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "X-Goog-User-Project": project_id,
        },
        method="PATCH",
    )

    try:
        with urllib.request.urlopen(patch_req) as resp:
            print("Successfully updated release: cloud.firestore")
            return
    except urllib.error.HTTPError as err:
        pass

    # Fallback to POST create release
    url_post = f"https://firebaserules.googleapis.com/v1/projects/{project_id}/releases"
    payload_rel = {
        "name": release_name,
        "rulesetName": ruleset_name,
    }
    post_req = urllib.request.Request(
        url_post,
        data=json.dumps(payload_rel).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "X-Goog-User-Project": project_id,
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(post_req) as resp:
            print("Successfully created release: cloud.firestore")
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode()
        print(f"Failed to release ruleset (HTTP {e.code}): {err_msg}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    current_dir = Path(__file__).resolve().parent
    rules_path = current_dir / "firestore.rules"
    proj_id = sys.argv[1] if len(sys.argv) > 1 else ""
    deploy_firestore_rules(proj_id, rules_path)
