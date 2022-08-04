import { StackContext, ReactStaticSite } from '@serverless-stack/resources';

export function MyStack({ stack, app }: StackContext) {
  const site = new ReactStaticSite(stack, 'ModuopsSite', {
    path: 'frontend',
    customDomain: {
      domainName:
        app.stage === 'production' ? 'moduops.com' : `${app.stage}.moduops.com`,
      domainAlias: app.stage === 'production' ? 'www.moduops.com' : undefined,
      hostedZone: 'moduops.com',
    },
  });
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
