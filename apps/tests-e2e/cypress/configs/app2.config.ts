import { defineConfig } from "cypress";

module.exports = defineConfig({
        
    e2e: {
      setupNodeEvents(on, config) {},
      baseUrl: 'http://localhost:4201',
      specPattern: 'cypress/e2e/app2/**/*.cy.{js,jsx,ts,tsx}',
    }
  })
  