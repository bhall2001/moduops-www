import { StackContext, StaticSite } from 'sst/constructs';

export function MyStack({ stack, app }: StackContext) {
  const site = new StaticSite(stack, 'ModuopsSite', {
    path: 'frontend',
    buildCommand: 'npm run build',
    buildOutput: 'build',
    customDomain: {
      domainName:
        app.stage === 'prod' ? 'moduops.com' : `${app.stage}.moduops.com`,
      domainAlias: app.stage === 'prod' ? 'www.moduops.com' : undefined,
      hostedZone: 'moduops.com',
    },
  });
  stack.addOutputs({
    SiteUrl: site.url ? site.url : '',
  });
}
