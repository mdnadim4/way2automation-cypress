/// <reference types="Cypress" />

describe('Verify Post Request', () => {

    Cypress.config('baseUrl', 'https://reqres.in')

    it('Sending Post Request', () => {

        const user = {
            "name": "morpheus",
            "job": "leader"
        }

        var response = cy.request('POST', '/api/users', user)
        response.its('status').should('eq', 201)

    });

    it('Sending Post Request - 2nd Way', () => {

        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
        })

    });

    it('Validate POST Request - Last Email', () => {

        var name = new Array();

        cy.request('GET', '/api/users').then((response) => {

            var body = JSON.parse(JSON.stringify(response.body))

            body.forEach((element) => {

                name.push(element['name'])

            })

        }).then(() => {

            var lastEmail = name[name.length-1]

            expect(lastEmail).to.equal('morpheus')

        })

    });

});