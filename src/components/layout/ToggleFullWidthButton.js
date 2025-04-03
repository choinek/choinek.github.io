import React, { useEffect, useState } from 'react';
import styles from './ToggleFullWidthButton.module.css';

export default function ToggleFullWidthButton() {
  const [isFullWidth, setIsFullWidth] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('fullWidth') === 'true';
    if (saved) {
      document.documentElement.style.setProperty('--ifm-container-width-xl', '90%');
      setIsFullWidth(true);
    }
  }, []);

  const toggle = () => {
    const next = !isFullWidth;
    document.documentElement.style.setProperty('--ifm-container-width-xl', next ? '90%' : '1140px');
    localStorage.setItem('fullWidth', next);
    setIsFullWidth(next);
  };

  return (
    <div className={styles.toggleContainer}>
      <button onClick={toggle} className={styles.toggleButton}>
        {isFullWidth ? '⇥⇤' : '↔'}
      </button>
    </div>
  );
}
