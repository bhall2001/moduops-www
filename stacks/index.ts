import { MyStack } from './MyStack';
import { App } from 'sst/constructs';

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'services',
    bundle: {
      format: 'esm',
    },
  });
  app.stack(MyStack);
}
