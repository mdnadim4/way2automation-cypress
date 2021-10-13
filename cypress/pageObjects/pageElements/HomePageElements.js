/// <reference types="Cypress" />

export default Class HomePageElements {

    customnerLoginBtn(){
        return cy.contains('Customer Login')
    }

    bankManagerLoginBtn(){
        return cy.contains('Bank Manager Login')
    }

}