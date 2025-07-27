import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ContactForm from '../components/FirebaseContactForm';
import HtmlEmbed from '../components/HtmlEmbed';
import { useState } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/adrians-tutorials/git/rebase">
            Git rebase tutorial
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Contact() {
  const [clickCount, setClickCount] = useState(0);
  const [showHiddenContent, setShowHiddenContent] = useState(false);

  const handleAvatarClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount >= 3) {
      setShowHiddenContent(true);
      setClickCount(0); // Reset counter
    }
  };

  return (
    <Layout title="Contact">
      <div className="contact-page" style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
        <div className="card card--full-height">
                  <div className="card__header">
                      <div className="avatar avatar--vertical">
                          <img 
                              className="avatar__photo avatar__photo--xl"
                              src="https://github.com/choinek.png"
                              alt="Adrian Chojnicki"
                              onClick={handleAvatarClick}
                              style={{ cursor: 'pointer' }}
                          />
                          <div className="avatar__intro">
                              <div className="avatar__name">Adrian Chojnicki</div>
                              <small className="avatar__subtitle">
                                  <a href="https://univio.com/" target="_blank">@Univo </a>
                                  <a href="https://global4net.com/" target="_blank">@Global4Net</a><br/>
                                  <a href="https://www.linkedin.com/in/adrian-chojnicki" target="_blank">Linkedin</a><br/>
                                  <a href="mailto:adrian@chojnicki.pl">adrian@chojnicki.pl</a>
                              </small>
                          </div>
                      </div>
                  </div>
              </div>
          {/* <ContactForm /> */}
        
        {showHiddenContent ? (
          <HtmlEmbed 
            height={820} 
            src="/embedded-pages/ahvana-albely.html" 
            title="Ahvana Albely" 
          />
        ) : (
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJDpPNc2kENr_ABzBjzYV8rsg3W0lm-Rz6JwNpKBk2RiTfDA/viewform?embedded=true" width="640" height="820" frameBorder="0">
            Ładuję...
          </iframe>
        )}
      </div>
    </Layout>
  );
}