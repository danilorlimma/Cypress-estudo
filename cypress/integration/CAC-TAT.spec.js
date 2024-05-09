/// <reference types="Cypress" />

const longText = 'Lorem ipsum dolor sit amet. Um este este é este personalizado é este este. sonalizado personalizado um personalizado texto.'
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
        cy.get('textarea').click().type(longText,{delay:10})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    });
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        
        cy.get('input#firstName').click().type('Danilo')
        cy.get('input#lastName').click().type('Lima')
        cy.get('input#email').click().type('Danilo.limoutlo.com')
        cy.get('textarea').click().type(longText,{delay:10})
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    });
    it('Verifica telefone vazio', () => {
       cy.get('input#phone').click().type(longText).should('not.have.value') 
    });

    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('input#phone-checkbox').check()
        cy.get('input#firstName').click().type('Danilo')
        cy.get('input#lastName').click().type('Lima')
        cy.get('input#email').click().type('Danilo.lima@outlo.com')
        cy.get('textarea').click().type(longText,{delay:10})
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    });

    it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('input#firstName').click().type('Danilo').clear().should('not.have.value')
        cy.get('input#lastName').click().type('Lima').clear().should('not.have.value')
        cy.get('input#email').click().type('Danilo.lima@outlo.com').clear().should('not.have.value')
        cy.get('input#phone').click().type(97545236).clear().should('not.have.value')
    });

    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',()=>{
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')

    })

});
