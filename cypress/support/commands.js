Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').click().type(email)
  cy.get('#password').click().type(password)
  cy.get('.content > .btn').click()
})

