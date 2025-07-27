// src/components/HtmlEmbed/index.tsx
import React from 'react';
import styles from './styles.module.css';

interface HtmlEmbedProps {
  width?: number | string;
  height?: number | string;
  title?: string;
  src?: string;
}

export default function HtmlEmbed({
  width = '100%',
  height = 600,
  title = "Dynamic Theme And Color Adjust",
  src = "/embedded-pages/colors-adjust.html"
}: HtmlEmbedProps): JSX.Element {

  if (typeof width === 'number') {
    width = `${width}px`;
  }

  if (typeof height === 'number') {
    height = `${height}px`;
  }

  return (
    <div className={styles.embedContainer}>
      <iframe
        src={src}
        className={styles.embedFrame}
        title={title}
        frameBorder="0"
        style={{ height: `${height}`, width: `${width}` }}
        allowFullScreen
      />
    </div>
  );
}