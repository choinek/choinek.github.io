// src/components/HtmlEmbed/index.tsx
import React from 'react';
import styles from './styles.module.css';

interface HtmlEmbedProps {
  height?: number;
  title?: string;
  src?: string;
}

export default function HtmlEmbed({
  height = 600,
  title = "Dynamic Theme And Color Adjust",
  src = "/embedded-pages/colors-adjust.html"
}: HtmlEmbedProps): JSX.Element {
  return (
    <div className={styles.embedContainer}>
      <iframe
        src={src}
        className={styles.embedFrame}
        title={title}
        frameBorder="0"
        style={{ height: `${height}px` }}
        allowFullScreen
      />
    </div>
  );
}