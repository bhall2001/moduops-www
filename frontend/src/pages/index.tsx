import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHeader from '../components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHilites from '@site/src/components/HomepageHilites';
import HomepageDownload from '@site/src/components/HomepageDownload';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ModuOps (pronounced 'mod-you-ops') is model railroad operations software"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageDownload />
        <HomepageHilites />
      </main>
    </Layout>
  );
}
