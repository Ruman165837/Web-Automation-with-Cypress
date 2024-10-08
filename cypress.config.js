const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    watchForFileChanges: false,
    "video": true,
  "videosFolder": "cypress/videos",
  "videoUploadOnPasses": false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    
    },
    
  }

});
