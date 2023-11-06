import { StackContext, StaticSite } from 'sst/constructs';

export function MyStack({ stack }: StackContext) {
  const site = new StaticSite(stack, 'ModuopsSite', {
    path: 'packages/frontend',
    buildCommand: 'npm run build',
    buildOutput: 'build',
    customDomain: {
      domainName:
        stack.stage === 'prod' ? 'moduops.com' : `${stack.stage}.moduops.com`,
      domainAlias: stack.stage === 'prod' ? 'www.moduops.com' : undefined,
      hostedZone: 'moduops.com',
    },
  });
  stack.addOutputs({
    SiteUrl: site.url ? site.url : '',
  });
}
