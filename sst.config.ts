import type { SSTConfig } from 'sst';
import { MyStack } from './stacks/MyStack';

export default {
  config(input) {
    return {
      name: 'moduops-www',
      region: 'us-east-2',
      main: 'stacks/index.ts',
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: 'nodejs18.x',
      architecture: 'arm_64',
    });

    app.stack(MyStack);
  },
} satisfies SSTConfig;
