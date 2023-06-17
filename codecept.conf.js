/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

exports.config = {
  name: 'eCommerce-store',
  tests: './tests/**/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
      show: true,
      browser: 'chromium',
    },
  },
  include: {
    I: './tests/steps_file.ts',
  },
};
