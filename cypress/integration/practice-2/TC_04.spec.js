/// <reference types="Cypress" />

describe('Handling Table Element', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })


    it('Verify Table data', () => {
        
        cy.get('tbody>tr>th').should('have.length', 3)

    });

    

});