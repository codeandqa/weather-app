/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://quiet-retreat-70098.herokuapp.com/')
  })


  it('.focus() - focus on a DOM element', () => {
    // https://on.cypress.io/focus
    cy.get('#city').focus()
      .type('Carmel')
    cy.get('#country').focus()
      .type('USA')
    cy.get('#city').focus()
      .type('Carmel')  
  })
})
/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://quiet-retreat-70098.herokuapp.com/')
  })


  it('.focus() - focus on a DOM element', () => {
    // https://on.cypress.io/focus
    cy.get('#city').focus()
      .type('Carmel')
    cy.get('#country').focus()
      .type('USA')
    cy.get('form').submit()   
  })
})
