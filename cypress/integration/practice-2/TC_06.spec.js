/// <reference types="Cypress" />

describe('Handling Custom Commands', () => {

    before(() => {
        cy.fixture('example').as('user')
    })

    it('Custom Commands', () => {
        
        cy.visit('https://rahulshettyacademy.com/angularpractice')

        cy.contact("William", "test@gmail.com", "123456", "Female", "option1", "1985-02-01")


    })

});
    

