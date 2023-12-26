// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My Second Test', () => {
    it('Testing web elements', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // check and uncheck option 1 checkbox with assertions to see if option 1 was checked or unchecked
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')


        // check option1 and option 3 checkbox in single line of code using common selector

        cy.get('input[type="checkbox"]').check(['option1', 'option3'])

        //handle static dropdowns using select()

        cy.get('select').select('option3')  //... select will always be the tagname for static dropdown as its an HTML Rule.

        //handle dynamic dropdowns 

        cy.get('#autocomplete').type('ind') //... get textbox element and type IND

        cy.get('.ui-menu-item div').each(($el, index, $list) => {   //... get the common locator for 3 results after typing ind , and then make a loop for these 3 results 

            if ($el.text() === 'India') {   //.. add condition that if within the iteration if text matches India then click on it
                cy.wrap($el).click()
            }

        })

        cy.get('#autocomplete').should('have.value', 'India')  //.. add assertion to check if final value is India


        //click on hide and show buttons and validate if text box elements is visible or invisible using assertions
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons

        cy.get('[value="radio2"]').check().should('be.checked')

    })
})
