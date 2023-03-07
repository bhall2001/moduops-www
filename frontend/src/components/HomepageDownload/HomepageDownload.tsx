import React from 'react';
import clsx from 'clsx';
import styles from './homepageDownload.module.css';

export default function HomepageDownload() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__subtitle">Download for FREE!</h1>
        <h4>**NEW** version 5.1.3</h4>
        <div className={styles.buttons} style={{ paddingBottom: '4rem' }}>
          <a
            href="https://s3.us-east-2.amazonaws.com/assets.bobhall.net/moduops/ModuOps-5_1_3-Mac.dmg"
            className="button button--secondary button--lg"
          >
            Download macOS
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://s3.us-east-2.amazonaws.com/assets.bobhall.net/moduops/ModuOps-5_1_3-Win-setup.exe"
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
