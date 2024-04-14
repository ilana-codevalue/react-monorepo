import { defineConfig } from "cypress";

module.exports = defineConfig({
        
    e2e: {
      setupNodeEvents(on, config) {},
      baseUrl: 'http://localhost:4200',
      specPattern: 'cypress/e2e/app1/**/*.cy.{js,jsx,ts,tsx}',
    }
  })
  