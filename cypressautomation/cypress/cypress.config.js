const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        on('task', {
            runTest(testFile) {
              it(testFile, () => {
                require(testFile); // Load and run the test file
              });
            },
          });
    },
  },
  component: {
    setupNodeEvents(on, config) {
        on('task', {
            runTest(testFile) {
              it(testFile, () => {
                require(testFile); // Load and run the test file
              });
            },
          });
    },
  },
})