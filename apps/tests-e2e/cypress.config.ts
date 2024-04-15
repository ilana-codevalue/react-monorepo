import { defineConfig } from "cypress";

// import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

// const config = nxE2EPreset(__filename, {
//   cypressDir: 'cypress',
//   webServerCommands: {
//     default: 'nx run app1:serve',
//     production: 'nx run app1:preview',
//   },
//   ciWebServerCommand: 'nx run app1:serve-static',
// });

export default defineConfig({
  e2e: {
    // ...config,
    // setupNodeEvents(on, config) {
    //   // This line sets up the web server as provided via `webServerCommands` and `ciWebServerCommand`
    //   // config.setupNodeEvents(on, config);
    // },
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
});
