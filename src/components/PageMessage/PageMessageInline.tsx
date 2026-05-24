import React, {type ReactNode} from 'react';
import {usePageMessageContext} from './PageMessageContext';
import PageMessageContent from './PageMessageContent';
import styles from './PageMessagePanel.module.css';

export default function PageMessageInline(): ReactNode {
  const {message} = usePageMessageContext();

  if (!message) {
    return null;
  }

  return (
    <PageMessageContent message={message} className={styles.inlinePanel} />
  );
}
