const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    // baseUrl is probably not needed for this test case, but if you want to run tests across multiple envs, it would be set here and use the base URL config.
    baseUrl: 'https://rdbrck.com'
  },
});
