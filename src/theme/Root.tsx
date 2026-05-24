import React, {type ReactNode} from 'react';
import {PageMessageProvider} from '@site/src/components/PageMessage/PageMessageContext';
import PageMessagePanel from '@site/src/components/PageMessage/PageMessagePanel';

export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <PageMessageProvider>
      {children}
      <PageMessagePanel />
    </PageMessageProvider>
  );
}
