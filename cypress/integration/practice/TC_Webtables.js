/// <reference types="Cypress" />

describe('Handling Web tables', () => {

    it('Verify webtable option', () => {
        cy.visit('https://money.rediff.com/indices/bse/sensex')

        //total rows
        cy.get('table.dataTable>tbody>tr').should('have.length', 30)

        //total column
        cy.get('table.dataTable>tbody>tr:first-child>td').should('have.length', 6)

        //Get single row data
        cy.get('table.dataTable>tbody>tr').eq(2).within(() => {
            cy.get('td').then((element) => {
                cy.
            })
        })
    });
    
});