import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import styles from './ToggleFullWidthButton.module.css';

const STORAGE_KEY = 'fullWidth';
const NARROW_WIDTH = '1200px';
const WIDE_WIDTH = '90%';

function applyContainerWidth(isFullWidth) {
  if (typeof document === 'undefined') return;
  const next = isFullWidth ? WIDE_WIDTH : NARROW_WIDTH;
  document.documentElement.style.setProperty('--ifm-container-width', next);
  document.documentElement.style.setProperty('--ifm-container-width-xl', next);
}

export default function ToggleFullWidthButton({ mobile = false, className }) {
  const [isFullWidth, setIsFullWidth] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) === 'true';
    setIsFullWidth(saved);
    applyContainerWidth(saved);
  }, []);

  const toggle = () => {
    const next = !isFullWidth;
    applyContainerWidth(next);
    localStorage.setItem(STORAGE_KEY, String(next));
    setIsFullWidth(next);
  };

  const label = isFullWidth
    ? translate({
        id: 'theme.navbar.fullWidthToggle.narrowLabel',
        message: 'Narrow content',
        description: 'Tooltip shown when full-width mode is currently active',
      })
    : translate({
        id: 'theme.navbar.fullWidthToggle.wideLabel',
        message: 'Wide content',
        description: 'Tooltip shown when full-width mode is currently inactive',
      });

  const Wrapper = mobile ? 'li' : 'div';

  return (
    <Wrapper
      className={clsx(
        {
          navbar__item: !mobile,
          'menu__list-item': mobile,
        },
        styles.toggleContainer,
        mobile && styles.toggleContainerMobile,
        className,
      )}
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        aria-pressed={isFullWidth}
        title={label}
        className={clsx(
          styles.toggleButton,
          mobile && styles.toggleButtonMobile,
        )}
      >
        <span aria-hidden="true" className={styles.toggleIcon}>
          {isFullWidth ? '⇥⇤' : '↔'}
        </span>
        {mobile && <span className={styles.toggleLabel}>{label}</span>}
      </button>
    </Wrapper>
  );
}
