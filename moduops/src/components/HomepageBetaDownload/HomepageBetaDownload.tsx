import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import styles from './homepageBetaDownload.module.css';

const BASE_URL = 'https://s3.us-east-2.amazonaws.com/assets.bobhall.net/moduops';
const VERSION = '6.0.1-beta.0';
const DOWNLOADS = [
  { label: 'macOS (Beta)', file: `ModuOps-${VERSION}-universal.dmg` },
  { label: 'Linux x64 AppImage', file: `ModuOps-${VERSION}-x86_64.AppImage` },
  { label: 'Linux x64 .deb', file: `ModuOps-${VERSION}-amd64.deb` },
  { label: 'Linux ARM64 AppImage', file: `ModuOps-${VERSION}-arm64.AppImage` },
  { label: 'Linux ARM64 .deb', file: `ModuOps-${VERSION}-arm64.deb` },
];
const FEEDBACK_EMAIL = 'bhall_2001@yahoo.com';

export default function HomepageBetaDownload() {
  return (
    <section className={clsx('hero', styles.betaBanner)}>
      <div className="container">
        <h1 className="hero__subtitle">Try Version 6 Beta</h1>
        <h4>version {VERSION} &middot; macOS &amp; Linux</h4>
        <p>
          A complete rewrite of ModuOps. See{' '}
          <Link to="/docs/next/whats-new">What's New</Link> and{' '}
          <Link to="/docs/next/upgrading">Upgrading from v5</Link>.
        </p>
        <div className={styles.buttons}>
          {DOWNLOADS.map(({ label, file }) => (
            <a key={file} href={`${BASE_URL}/${file}`} className="button button--primary button--lg">
              {label}
            </a>
          ))}
        </div>
        <div className={styles.notice}>
          <Admonition type="warning" title="Beta software">
            <ul>
              <li>Has known and unknown bugs. Features and screens may change before the final release.</li>
              <li>Back up your layout files first. Don't rely on the beta for an operating session.</li>
              <li>v5 <code>.mop2</code> files are copied to the new <code>.mop3</code> format; originals are left untouched and still open in v5.</li>
              <li>Keep version 5 installed until v6 is final.</li>
              <li>Windows is not yet available.</li>
              <li>
                Found a bug or have feedback? Email{' '}
                <a href={`mailto:${FEEDBACK_EMAIL}?subject=ModuOps%20v6%20beta`}>{FEEDBACK_EMAIL}</a>.
              </li>
            </ul>
          </Admonition>
        </div>
      </div>
    </section>
  );
}
