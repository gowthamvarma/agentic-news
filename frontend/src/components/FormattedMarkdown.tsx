import React from 'react';

interface FormattedMarkdownProps {
  content: string;
  className?: string;
}

/**
 * Robust, lightweight Markdown formatter tailored for chat bubbles.
 * Renders headings, bold, italics, inline code, code blocks, bullet points,
 * numbered lists, links, and blockquotes with elegant DaisyUI/Tailwind styling.
 */
export const FormattedMarkdown: React.FC<FormattedMarkdownProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Helper to parse inline formatting: bold, italic, code, links
  const renderInline = (text: string): React.ReactNode => {
    // Regex tokens: code, bold, italic, link
    const tokenRegex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
    const parts = text.split(tokenRegex);

    return parts.map((part, index) => {
      if (!part) return null;

      // Inline code
      if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
        return (
          <code
            key={index}
            className="px-1.5 py-0.5 mx-0.5 rounded bg-base-content/10 border border-base-content/15 font-mono text-xs font-semibold text-primary filter brightness-110"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      // Bold - inherits text color with extra font weight so it always pops
      if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
        return (
          <strong key={index} className="font-extrabold tracking-tight text-inherit">
            {part.slice(2, -2)}
          </strong>
        );
      }

      // Italic
      if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
        return (
          <em key={index} className="italic opacity-90">
            {part.slice(1, -1)}
          </em>
        );
      }

      // Link [text](url)
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, linkText, linkUrl] = linkMatch;
        return (
          <a
            key={index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary font-semibold hover:underline inline-flex items-center gap-0.5"
          >
            {linkText}
          </a>
        );
      }

      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  // Split lines into blocks: headers, lists, quotes, dividers, codeblocks, paragraphs
  const lines = content.split('\n');
  const blocks: React.ReactNode[] = [];

  let inCodeBlock = false;
  let codeBlockLines: string[] = [];
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;

  const flushList = () => {
    if (currentList) {
      if (currentList.type === 'ul') {
        blocks.push(
          <ul key={`list-${blocks.length}`} className="my-2 space-y-1.5 pl-2 list-none">
            {currentList.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="flex-1">{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      } else {
        blocks.push(
          <ol key={`list-${blocks.length}`} className="my-2 space-y-1.5 pl-2 list-none">
            {currentList.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed">
                <span className="text-xs font-bold text-primary font-mono mt-0.5 min-w-[1.2rem]">
                  {idx + 1}.
                </span>
                <span className="flex-1">{renderInline(item)}</span>
              </li>
            ))}
          </ol>
        );
      }
      currentList = null;
    }
  };

  lines.forEach((line, lineIdx) => {
    const trimmed = line.trim();

    // Check code blocks
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        // Close code block
        blocks.push(
          <pre
            key={`code-${lineIdx}`}
            className="p-3 my-2 rounded-lg bg-base-content/10 font-mono text-xs overflow-x-auto text-inherit border border-base-content/15"
          >
            <code>{codeBlockLines.join('\n')}</code>
          </pre>
        );
        codeBlockLines = [];
        inCodeBlock = false;
      } else {
        flushList();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockLines.push(line);
      return;
    }

    // Horizontal rule
    if (trimmed === '---' || trimmed === '***') {
      flushList();
      blocks.push(<hr key={`hr-${lineIdx}`} className="my-3 border-current/20" />);
      return;
    }

    // Unordered list item (- or *)
    const ulMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (ulMatch) {
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(ulMatch[1]);
      return;
    }

    // Ordered list item (1. )
    const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(olMatch[1]);
      return;
    }

    // If it's not a list item, flush pending list
    flushList();

    // Empty line
    if (!trimmed) {
      return;
    }

    // Headings
    if (trimmed.startsWith('#### ')) {
      blocks.push(
        <h4 key={`h4-${lineIdx}`} className="font-bold text-xs text-primary mt-3 mb-1 uppercase tracking-wider">
          {renderInline(trimmed.replace('#### ', ''))}
        </h4>
      );
      return;
    }
    if (trimmed.startsWith('### ')) {
      blocks.push(
        <h3 key={`h3-${lineIdx}`} className="font-bold text-base text-primary mt-3 mb-1 flex items-center gap-1.5">
          {renderInline(trimmed.replace('### ', ''))}
        </h3>
      );
      return;
    }
    if (trimmed.startsWith('## ')) {
      blocks.push(
        <h2 key={`h2-${lineIdx}`} className="font-bold text-lg text-primary mt-4 mb-2 pb-1 border-b border-base-300">
          {renderInline(trimmed.replace('## ', ''))}
        </h2>
      );
      return;
    }
    if (trimmed.startsWith('# ')) {
      blocks.push(
        <h1 key={`h1-${lineIdx}`} className="font-extrabold text-xl text-primary mt-4 mb-2 pb-1 border-b border-base-300">
          {renderInline(trimmed.replace('# ', ''))}
        </h1>
      );
      return;
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      const quoteText = trimmed.replace(/^>\s*/, '');
      blocks.push(
        <blockquote
          key={`quote-${lineIdx}`}
          className="my-2 border-l-4 border-primary pl-3 py-1.5 bg-primary/15 rounded-r text-xs md:text-sm italic font-medium opacity-95 text-inherit"
        >
          {renderInline(quoteText)}
        </blockquote>
      );
      return;
    }

    // Standard paragraph
    blocks.push(
      <p key={`p-${lineIdx}`} className="text-sm md:text-base leading-relaxed my-1.5 text-inherit">
        {renderInline(trimmed)}
      </p>
    );
  });

  flushList();

  return <div className={`space-y-1 ${className}`}>{blocks}</div>;
};
