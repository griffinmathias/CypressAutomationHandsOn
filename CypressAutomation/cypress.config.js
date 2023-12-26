const { defineConfig } = require("cypress");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({

  defaultCommandTimeout: 8000,  //overriden the default timeout of cypress that is 4secs, to 6secs

  env: {
    url: 'https://rahulshettyacademy.com'
    //url: 'https://google.com'
  
  },

  projectId: "7i5yxy",

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/ecommerce/*.feature'
    //specPattern: 'cypress/integration/examples/*.js'
  },
});
