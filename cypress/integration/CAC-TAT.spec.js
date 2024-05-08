/// <reference types="Cypress" />
describe('Central de atendimento CAC-TAT', () => {
        beforeEach(() => {
            cy.visit('./src/index.html')
            
        });
    it('Primeito teste', () => {
        cy.title().should('eq','Central de Atendimento ao Cliente TAT')
        cy.get('input#firstName').click().type('Danilo')
        cy.get('input#lastName').click().type('Lima')
        cy.get('input#email').click().type('Danilo.lima@outlo.com')
        cy.get('textarea').click().type('Gostaria de ajuda com o curso da talk')
    });
    
});
