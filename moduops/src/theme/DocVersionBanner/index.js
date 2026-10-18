import React from 'react';
import OriginalBanner from '@theme-original/DocVersionBanner';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

export default function DocVersionBanner(props) {
  const {pathname} = useLocation();
  const base = useBaseUrl('/docs/next');
  if (!pathname.startsWith(base)) {
    return <OriginalBanner {...props} />;
  }
  return (
    <Admonition type="warning" title="Early beta">
      ModuOps version 6 is in early beta. Anything you do in it may be lost or
      may not be compatible with the final version. Don't rely on it for
      anything you can't afford to redo.
    </Admonition>
  );
}
