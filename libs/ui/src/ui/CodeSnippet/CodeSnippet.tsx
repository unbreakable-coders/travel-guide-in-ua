'use client';

import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check } from 'lucide-react';
import './CodeSnippet.styles.scss';

interface Props {
  code: string;
  language: string;
  filename?: string;
}

export const CodeSnippet = ({ code, language, filename }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-snippet">
      <div className="code-snippet__header">
        <span className="code-snippet__filename">{filename || language}</span>
        <button
          className={`code-snippet__copy-btn ${
            copied ? 'code-snippet__copy-btn--success' : ''
          }`}
          onClick={handleCopy}
          type="button"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <div className="code-snippet__content">
        <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="code-snippet__line-number">{i + 1}</span>
                  <span className="code-snippet__line-content">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
