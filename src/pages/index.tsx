import { useEffect, useRef, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const PARALLAX_STRENGTH = 0.35;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const heroImage = useBaseUrl('/img/hero-network-skyline.jpg');
  const bgRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = heroRef.current;
      const bg = bgRef.current;
      if (!hero || !bg) return;
      const rect = hero.getBoundingClientRect();
      // Only animate while the hero is in viewport.
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset = -rect.top * PARALLAX_STRENGTH;
      bg.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header ref={heroRef} className={styles.heroBanner}>
      <div
        ref={bgRef}
        className={styles.heroBgLayer}
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Adrian Chojnicki · choinek</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/contact/">
            Contact
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog/">
            Blog
          </Link>
        </div>
      </div>

      <span className={styles.heroScrollHint} aria-hidden="true">scroll</span>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Choinek Ardian Adrian">
      <HomepageHeader />
      <main>{/*<HomepageFeatures />*/}</main>
    </Layout>
  );
}
