import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageHeader from '../components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageDownload() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
      <h1 className="hero__subtitle">Download for FREE!</h1>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/">
          Download ModuOps
        </Link>
      </div>
    </div>
  </header>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageDownload />
      </main>
    </Layout>
  );
}
