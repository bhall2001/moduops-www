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
