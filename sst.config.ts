import { SSTConfig } from 'sst';
import { MyStack } from './stacks/MyStack';

export default {
  config(_input) {
    return {
      name: 'moduops-www',
      region: 'us-east-2',
    };
  },
  stacks(app) {
    app.stack(MyStack);
  },
} satisfies SSTConfig;
