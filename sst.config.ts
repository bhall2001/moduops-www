/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'moduops-www',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      // protect: ['production'].includes(input?.stage),
      home: 'aws',
      providers: { aws: { region: 'us-east-2' } },
    };
  },
  async run() {
    new sst.aws.StaticSite('moduops-www', {
      domain: {
        name:
          $app.stage === 'production'
            ? 'moduops.com'
            : $app.stage + '.moduops.com',
        redirects: $app.stage === 'production' ? ['www.moduops.com'] : [],
        dns: sst.aws.dns({ override: true }),
      },
      path: 'moduops',
      build: {
        command: 'pnpm run build',
        output: 'build',
      },
    });
  },
});
