const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        runTest(testFile) {
         it(testFile, () => {
        require(testFile);
      });
        },
      });  
    },
  },
});


