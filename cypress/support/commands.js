// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('fillMandatoryFieldsAndSubmit',() => {
    cy.get('input#firstName').click().type('Danilo')
    cy.get('input#lastName').click().type('Lima')
    cy.get('input#email').click().type('Danilo.lima@outlo.com')
    cy.get('textarea').click().type('longText',{delay:10})
    //cy.get('button[type="submit"]').click()
    cy.contains('button[type="submit"]','Enviar').click()
   })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
