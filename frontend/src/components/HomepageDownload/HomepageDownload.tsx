import React from 'react';
import clsx from 'clsx';
import styles from './homepageDownload.module.css';

export default function HomepageDownload() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__subtitle">Download for FREE!</h1>
        <h4>version 5.3.1</h4>
        <div className={styles.buttons} style={{ paddingBottom: '2rem' }}>
          <a
            href="https://s3.us-east-2.amazonaws.com/assets.bobhall.net/moduops/ModuOps_Setup.exe"
            className="button button--secondary button--lg"
          >
            Windows
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://s3.us-east-2.amazonaws.com/assets.bobhall.net/moduops/ModuOps-Apple.dmg"
            className="button button--secondary button--lg"
          >
            macOS Apple Silicon
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://s3.us-east-2.amazonaws.com/assets.bobhall.net/moduops/ModuOps-Intel.dmg"
            className="button button--secondary button--lg"
          >
            macOS Intel
          </a>
        </div>
      </div>
    </header>
  );
}
