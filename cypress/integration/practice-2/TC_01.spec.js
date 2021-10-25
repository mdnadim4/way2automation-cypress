/// <reference types="Cypress" />

describe('Handling Invisible Element', () => {
    it('Verify Invisible Element', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(4000)
        cy.get('.product:visible').should('have.length', 4)
    });
});