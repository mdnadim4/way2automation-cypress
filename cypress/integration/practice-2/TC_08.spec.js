/// <reference types="Cypress" />
import('cypress-iframe')

describe('Handling Iframe Element', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
    })


    it('Verify Iframe - 1st Way', () => {
        
        cy.get('#courses-iframe').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('a[href*="mentorship"]').eq(1).click({force: true})

        cy.get('@iframe').find('.pricing-price').should('have.length', 2)

    })

    it('Verify Iframe - 2nd Way', () => {

        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('a[href*="mentorship"]').eq(1).click({force: true})

        cy.iframe().find('.pricing-price').should('have.length', 2)

    })

});
    

