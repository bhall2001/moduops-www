import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Moduops Tutorial - 5min ⏱️
            </Link>
          </div> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/v5_1_1"
          >
            Moduops Version 5 Released!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;
