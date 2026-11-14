import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import OsIcon from './OsIcon';
import styles from './homepageBetaDownload.module.css';

const BASE_URL = 'https://s3.us-east-2.amazonaws.com/assets.bobhall.net/moduops';
const VERSION = '6.0.1-beta.1';

type Os = 'mac' | 'windows' | 'linux';
type DownloadLink = { label: string; file: string };
type OsCard = { os: Os; title: string; primary?: DownloadLink; others: DownloadLink[] };

const CARDS: OsCard[] = [
  {
    os: 'mac',
    title: 'macOS',
    primary: { label: 'Download', file: `ModuOps-${VERSION}-universal.dmg` },
    others: [],
  },
  { os: 'windows', title: 'Windows', others: [] },
  {
    os: 'linux',
    title: 'Linux',
    primary: { label: 'Download amd64 AppImage', file: `ModuOps-${VERSION}-x86_64.AppImage` },
    others: [
      { label: 'amd64 .deb', file: `ModuOps-${VERSION}-amd64.deb` },
      { label: 'ARM64 AppImage', file: `ModuOps-${VERSION}-arm64.AppImage` },
      { label: 'ARM64 .deb', file: `ModuOps-${VERSION}-arm64.deb` },
    ],
  },
];

function detectOs(): Os | null {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  const ua = nav.userAgent;
  if (/android|iphone|ipad|ipod/i.test(ua)) return null;
  const platform = nav.userAgentData?.platform ?? nav.platform ?? '';
  const id = `${platform} ${ua}`;
  if (/win/i.test(id)) return 'windows';
  if (/mac/i.test(id)) return 'mac';
  if (/linux|x11|cros/i.test(id)) return 'linux';
  return null;
}

const FEEDBACK_EMAIL = 'bhall_2001@yahoo.com';

export default function HomepageBetaDownload() {
  const [detected, setDetected] = useState<Os | null>(null);
  useEffect(() => setDetected(detectOs()), []);

  return (
    <section className={clsx('hero', styles.betaBanner)}>
      <div className="container">
        <h1 className="hero__subtitle">Try Version 6 Beta</h1>
        <h4>version {VERSION}</h4>
        <p>
          A complete rewrite of ModuOps. See{' '}
          <Link to="/docs/next/whats-new">What's New</Link> and{' '}
          <Link to="/docs/next/upgrading">Upgrading from v5</Link>.
        </p>
        <div className={styles.buttons}>
          {CARDS.map(({ os, title, primary, others }) => (
            <div key={os} className={clsx(styles.card, detected === os && styles.cardDetected)}>
              {detected === os && <span className={styles.badge}>Recommended for your system</span>}
              <OsIcon os={os} />
              <h3>{title}</h3>
              {primary ? (
                <a href={`${BASE_URL}/${primary.file}`} className="button button--primary button--lg">
                  {primary.label}
                </a>
              ) : (
                <span className={styles.soon}>Coming soon</span>
              )}
              {others.length > 0 && (
                <ul className={styles.links}>
                  {others.map(({ label, file }) => (
                    <li key={file}>
                      <a href={`${BASE_URL}/${file}`}>{label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
