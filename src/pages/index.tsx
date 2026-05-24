import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const PARALLAX_STRENGTH = 0.35;

type HeroSpark = {
  x: string;
  y: string;
  dx: string;
  dy: string;
  size: string;
  duration: string;
  delay: string;
  cool?: boolean;
};

/* Hand-tuned constellation field – varied positions, sizes and timings so the
   eye never catches a repeating pattern. Mix of warm amber (most) + a few
   cool cyan ones to echo the right-side mist of the hero image.
   Sizes:  ~3px = distant, 5-6px = mid, 8-10px = near (with brighter halo). */
const HERO_SPARKS: ReadonlyArray<HeroSpark> = [
  { x: '6%',  y: '18%', dx: '40px',  dy: '-24px', size: '5px',  duration: '14s', delay: '0s'   },
  { x: '14%', y: '38%', dx: '-32px', dy: '28px',  size: '8px',  duration: '17s', delay: '1.1s' },
  { x: '12%', y: '72%', dx: '36px',  dy: '-30px', size: '4px',  duration: '13s', delay: '3.8s' },
  { x: '22%', y: '12%', dx: '-28px', dy: '34px',  size: '3px',  duration: '21s', delay: '2.2s' },
  { x: '26%', y: '54%', dx: '30px',  dy: '24px',  size: '6px',  duration: '18s', delay: '5.0s' },
  { x: '32%', y: '82%', dx: '-34px', dy: '-26px', size: '4px',  duration: '15s', delay: '0.7s' },
  { x: '40%', y: '24%', dx: '26px',  dy: '36px',  size: '7px',  duration: '19s', delay: '4.4s' },
  { x: '44%', y: '60%', dx: '-38px', dy: '-22px', size: '3px',  duration: '16s', delay: '6.1s' },
  { x: '50%', y: '90%', dx: '24px',  dy: '-30px', size: '5px',  duration: '20s', delay: '2.9s' },
  { x: '54%', y: '14%', dx: '-30px', dy: '28px',  size: '4px',  duration: '13s', delay: '1.6s' },
  { x: '60%', y: '46%', dx: '34px',  dy: '32px',  size: '9px',  duration: '22s', delay: '3.5s', cool: true },
  { x: '68%', y: '78%', dx: '-28px', dy: '-24px', size: '6px',  duration: '17s', delay: '5.8s' },
  { x: '72%', y: '20%', dx: '38px',  dy: '26px',  size: '4px',  duration: '14s', delay: '0.4s', cool: true },
  { x: '78%', y: '56%', dx: '-26px', dy: '34px',  size: '7px',  duration: '19s', delay: '2.7s' },
  { x: '84%', y: '12%', dx: '30px',  dy: '-28px', size: '3px',  duration: '15s', delay: '4.9s' },
  { x: '86%', y: '40%', dx: '-36px', dy: '22px',  size: '5px',  duration: '21s', delay: '1.9s', cool: true },
  { x: '90%', y: '68%', dx: '24px',  dy: '-32px', size: '8px',  duration: '18s', delay: '3.1s' },
  { x: '94%', y: '88%', dx: '-30px', dy: '-26px', size: '4px',  duration: '16s', delay: '6.4s' },
];

const sparkStyle = (s: HeroSpark): CSSProperties => ({
  '--spark-x': s.x,
  '--spark-y': s.y,
  '--spark-dx': s.dx,
  '--spark-dy': s.dy,
  '--spark-size': s.size,
  '--spark-duration': s.duration,
  '--spark-delay': s.delay,
} as CSSProperties);

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
      <div className={styles.heroSparks} aria-hidden="true">
        {HERO_SPARKS.map((spark, i) => (
          <span
            key={i}
            className={
              spark.cool
                ? `${styles.heroSpark} ${styles.heroSparkCool}`
                : styles.heroSpark
            }
            style={sparkStyle(spark)}
          />
        ))}
      </div>

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
