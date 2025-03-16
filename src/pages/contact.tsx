import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ContactForm from '../components/FirebaseContactForm';

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
  return (
    <Layout title="Contact">
      <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <div class="card card--full-height">
                <div class="card__header">
                    <div class="avatar avatar--vertical">
                        <img class="avatar__photo avatar__photo--xl"
                             src="https://github.com/choinek.png"
                             alt="Adrian Chojnicki"/>
                        <div class="avatar__intro">
                            <div class="avatar__name">Adrian Chojnicki</div>
                            <small class="avatar__subtitle">
                                Solution Architect<br/>
                                <a href="https://www.linkedin.com/in/adrian-chojnicki">Linkedin</a><br/>
                                <a href="mailto:adrian.chojnicki@univio.com">Wyślij
                                    wiadomość</a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        {/* <ContactForm /> */}
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJDpPNc2kENr_ABzBjzYV8rsg3W0lm-Rz6JwNpKBk2RiTfDA/viewform?embedded=true" width="640" height="820" frameborder="0" marginheight="0" marginwidth="0">Ładuję…</iframe>
      </div>
    </Layout>
  );
}