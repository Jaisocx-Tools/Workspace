const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl || 'https://sandbox.brightday.email/',
    supportFile: false,
    specPattern: '/var/cypress/e2e/**/*.cy.{js,ts}',
  },
});


