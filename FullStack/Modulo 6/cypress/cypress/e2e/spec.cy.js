describe('Mi primera prueba', () => {
  it('Visita Google', () => {
    cy.visit('https://www.google.com')
    cy.get('input[tittle="Buscar"]').type('Cypress testing')
    cy.get('input[name="btnK"]').click()
    cy.title().should('include', 'Cypress testing')
  })
})