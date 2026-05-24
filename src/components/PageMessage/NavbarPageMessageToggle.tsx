import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {usePageMessageContext} from './PageMessageContext';
import styles from './PageMessagePanel.module.css';

type Props = {
  mobile?: boolean;
  className?: string;
};

export default function NavbarPageMessageToggle({
  mobile = false,
  className,
}: Props): ReactNode {
  const {message, mobileExpanded, setMobileExpanded} = usePageMessageContext();
  const navbarMobileSidebar = useNavbarMobileSidebar();

  if (!message || mobile) {
    return null;
  }

  const toggle = () => {
    const next = !mobileExpanded;
    setMobileExpanded(next);
    if (next && !navbarMobileSidebar.shown) {
      navbarMobileSidebar.toggle();
    }
  };

  return (
    <div
      className={clsx(
        'navbar__item',
        styles.pageMessageToggle,
        className,
      )}>
      <button
        type="button"
        className={styles.pageMessageToggleButton}
        aria-label="Page notice"
        aria-expanded={mobileExpanded}
        title="Page notice"
        onClick={toggle}>
        ?
      </button>
    </div>
  );
}
