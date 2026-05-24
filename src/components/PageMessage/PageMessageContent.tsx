import React, {type ReactNode} from 'react';
import type {PageMessage} from './PageMessageContext';
import styles from './PageMessagePanel.module.css';

type Props = {
  message: PageMessage;
  className: string;
};

export default function PageMessageContent({
  message,
  className,
}: Props): ReactNode {
  return (
    <aside
      className={className}
      role="note"
      aria-label={message.title ?? 'Page notice'}>
      <div data-nosnippet>
        {message.title && <p className={styles.title}>{message.title}</p>}
        <div className={styles.body}>{message.body}</div>
      </div>
    </aside>
  );
}
