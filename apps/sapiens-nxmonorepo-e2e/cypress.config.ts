import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run sapiens-nxmonorepo:serve',
        production: 'nx run sapiens-nxmonorepo:preview',
      },
      ciWebServerCommand: 'nx run sapiens-nxmonorepo:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
