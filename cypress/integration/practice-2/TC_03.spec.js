/// <reference types="Cypress" />

describe('Handling Checkbox Element', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it('Checkbox Element', () => {
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')

        // Multiple select checkbox
        cy.get('[type="checkbox"]').check(['option1','option3']).should('be.checked')
    });

    it('Dropdown Select Element', () => {
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')
    });

    it('Autocomple Dropdown Element', () => {

        cy.get('#autocomplete').type('Ban')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            const data = $el.text()
            if(data === 'Bangladesh'){
                cy.wrap($el).click()
            }   
        })

        cy.get('#autocomplete').should('have.value', 'Bangladesh')

    });

    it('Verify Radiobox', () => {

        cy.get('[type="radio"]').check('radio3').should('be.checked').and('have.value', 'radio3')

    });

    it('Verify visible & invisible', () => {

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    });

    it('Verify Alert option', () => {

        cy.get('#alertbtn').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

    });

    it('Verify Confirm option', () => {

        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    });

    it('Verify Child & navigation', () => {

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include','rahulshettyacademy')

        cy.go("back")
    });

    it.only('Verify Child Window', () => {

        cy.get('#openwindow').invoke('href', 'http://www.qaclickacademy.com/').click()

    });

    it('Verify Mouseover Event', () => {

        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

    });



    

});