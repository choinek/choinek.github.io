/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  minHeight?: number;
  url: string;
  fullscreen?: boolean;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}

export default function BrowserWindow({
  children,
  minHeight,
  url = 'http://localhost:3000',
  fullscreen = false,
  style,
  bodyStyle,
}: Props): ReactNode {
  return (
    <div className={styles.browserWindow} style={{...style, minHeight}}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={clsx(styles.dot, fullscreen ? styles.dotGlowing : '')} style={{background: 'rgba(242,95,88,0.35)'}} />
          <span className={clsx(styles.dot, !fullscreen ? styles.dotGlowing : '')} style={{background: '#58cb42'}} />
        </div>
        <div className={clsx(styles.browserWindowAddressBar, 'text--truncate')}>
          <a href={url} target="_blank">{url}</a>
        </div>
        {/* <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div> */}
      </div>

      <div className={styles.browserWindowBody} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
