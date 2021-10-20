/// <reference types="Cypress" />

Given('I navigate to to website', () => {
	cy.visit(
		'https://www.way2automation.com/angularjs-protractor/banking/#/login'
	)
})

When('I click on Bank Manager Login Button', () => {
	cy.contains('Bank Manager Login').click()
})

And('I validate the page title', () => {
	cy.title().should('eq', 'Protractor practice website - Banking App')
})
