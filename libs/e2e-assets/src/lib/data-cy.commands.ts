// load the global Cypress types
/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to get elements by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        dataCy(selector: string): Chainable<Element>;
    }
}
Cypress.Commands.add('dataCy', (value) => { cy.get(`${value}`)});