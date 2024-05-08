/// <reference types="Cypress" />
describe('Central de atendimento CAC-TAT', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')

    });
    it('verifica o título da aplicação', function () {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

    });

    it('Preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('input#firstName').click().type('Danilo')
        cy.get('input#lastName').click().type('Lima')
        cy.get('input#email').click().type('Danilo.lima@outlo.com')
        cy.get('textarea').click().type('Lorem ipsum dolor sit amet. Um este este é este personalizado é este este. sonalizado personalizado um personalizado texto.')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    });

});
