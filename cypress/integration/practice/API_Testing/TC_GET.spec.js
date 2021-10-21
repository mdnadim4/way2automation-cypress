/// <reference types="Cypress" />

describe('Verify Get Request', () => {
    it('Validate Get Request', () => {
        cy.request('GET','https://reqres.in/api/users?page=2')
        .its('status').should('eq', 200)

        // var response = cy.request('https://reqres.in/api/users?page=2')
        // response.its('status').should('eq', 200)
    });

    it('Validate Get Request - Data Check', () => {
        
        cy.request('https://reqres.in/api/users?page=2').then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body.data).to.have.length(6)
            expect(response.body.data[0]).to.have.property('id', 7)
            expect(response.body.data[0]).to.have.property('email', 'michael.lawson@reqres.in')
            expect(response.body.data[0].first_name).to.equal('Michael')
            expect(response.body.data[0]).to.have.property('last_name', 'Lawson')
            expect(response.body.data[0]).to.have.property('avatar', 'https://reqres.in/img/faces/7-image.jpg')

        })

    });

});