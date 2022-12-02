import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageHeader from '../components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHilites from '@site/src/components/HomepageHilites';

function HomepageDownload() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__subtitle">Download for FREE!</h1>
        <h4>**NEW** version 5.1.1</h4>
        <div className={styles.buttons} style={{ paddingBottom: '4rem' }}>
          <a
            href="https://s3.us-east-2.amazonaws.com/assets.bobhall.net/moduops/ModuOps-5_1_1-Mac.dmg"
            className="button button--secondary button--lg"
          >
            Download macOS
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://s3.us-east-2.amazonaws.com/assets.bobhall.net/moduops/ModuOps-5_1_1-Win-setup.exe"
            className="button button--secondary button--lg"
          >
            Download Windows
          </a>
        </div>
        <h6>Legacy version 2018.1.1</h6>
        <div className={styles.buttons}>
          <a
            href={require('/docs/ModuOps_Mac_2018.1.1.zip').default}
            className="button button--secondary button--lg"
            download="ModuOps_Mac_2018.1.1.zip"
          >
            Download macOS
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={require('/docs/ModuOps_Windows_2018.1.1.zip').default}
            className="button button--secondary button--lg"
            download="ModuOps_Windows_2018.1.1.zip"
          >
            Download Windows
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageHilites />
        <HomepageDownload />
      </main>
    </Layout>
  );
}
