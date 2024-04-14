describe('template spec', () => {
  it('visit home page - app1', () => {
    cy.visit('http://localhost:4200')
    cy.dataCy('#welcome').should('be.visible');
  })
})