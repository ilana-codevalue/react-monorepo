describe('template spec', () => {
  it('visit home page - app2', () => {
    cy.visit('http://localhost:4201')
    cy.dataCy('#welcome > h1').should('be.visible')
  })
})