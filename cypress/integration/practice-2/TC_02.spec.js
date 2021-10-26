/// <reference types="Cypress" />

describe('Handling Add To Cart Option', () => {
    it('Verify Invisible Element', () => {
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.url().should('include', '/cart')
        cy.contains('Place Order').click()
        cy.get('select').select('Bangladesh').should('have.value', 'Bangladesh')
        cy.get('.chkAgree').check()
        cy.contains('Proceed').click()
        cy.url().should('include', '/country')
        cy.contains('Thank you, your order has been placed successfully').should('contain.text', 'Thank you, your order has been placed successfully')

    });
});