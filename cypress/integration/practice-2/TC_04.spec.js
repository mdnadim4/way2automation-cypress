/// <reference types="Cypress" />

describe('Handling Fixture Data', () => {

    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data
        })
    })

    it('Fixure - 1st Way', () => {

        cy.visit('https://rahulshettyacademy.com/angularpractice')

        cy.get('[name="name"]:nth-child(2)').type(data.name).should('have.value', data.name)
        cy.get('[name="email"]').type(data.email).should('have.value', data.email)
        cy.get('[type="password"]').type(data.password).should('have.value', data.password)
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.get('[id="exampleFormControlSelect1"]').select(data.gender).should('have.value', data.gender)
        cy.get('[type="radio"]').check(data.status).should('be.checked')
        cy.get('[id="inlineRadio3"]').should('be.disabled')
        cy.get('[type="date"]').type(data.date)
        cy.get('[type="submit"]').click()
        cy.wait(2000)
        cy.get('.alert-success').should('contain', data.success)

    });



});