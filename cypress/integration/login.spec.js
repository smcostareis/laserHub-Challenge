describe('Login with exintent credentials', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.get('#onetrust-accept-btn-handler')
      .click()
      .should('not.exist')
  })

  it('Validate Email is a mandatory field', () => {
    cy.get('#password').click().type('something')
    cy.get('.content > .btn').click()
    cy.get('div.content > input:first-child')
      .should('have.attr', 'data-focus-visible-added')

  })
  it('Validate Password is a mandatory field', () => {
    cy.get('#email').click().type('something@something.com')
    cy.get('.content > .btn').click()
    cy.get('div.content > input:nth-child(2)')
      .should('have.attr', 'data-focus-visible-added')
  })

  it('Sign in with unvalid credentials', () => {
    cy.login('something@something.com', 'qweqwe123!')
    cy.get('.alert').should('be.visible')
  })

  it('Sign in with valid credentials', () => {
    cy.login(Cypress.env('user_name'), Cypress.env('user_password'))
    cy.get('.my-2').should('be.visible')
  })
})