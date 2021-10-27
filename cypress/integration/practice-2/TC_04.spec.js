/// <reference types="Cypress" />

describe('Handling Table Element', () => {

    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data
        })
    })


    it('Fixure & Custom Commands', () => {
        
        cy.visit('https://rahulshettyacademy.com/angularpractice')

        cy.get('[name="name"]:nth-child(2)').type(this.data.name).should('have.value', this.data.name)
        cy.get('[name="email"]').type(this.data.email).should('have.value', this.data.email)
        cy.get('[type="password"]').type(this.data.password).should('have.value', this.data.password)
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.get('[id="exampleFormControlSelect1"]').select(this.data.gender).should('have.value', this.data.gender)
        cy.get('[[type="radio"]]').check(this.data.status).should('be.checked')
        cy.get('[id="inlineRadio3"]').should('be.disabled')
        cy.get('[type="date"]').type(this.data.date)
        cy.get('[type="submit"]').click()

    });

    

});