/// <reference types="Cypress" />

describe('Handling Invisible Element', () => {
    it('Verify Invisible Element', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const productName = $el.find('.product-name').text()
            const price = $el.find('.product-price').text()

            if(productName.includes('Carrot')){
                cy.wrap($el).find('button').click()
            }
            cy.log(productName)
            cy.log(price)
        })

    });
});