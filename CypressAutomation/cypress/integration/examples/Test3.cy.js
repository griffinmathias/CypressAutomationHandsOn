// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My Second Test', () => {
    it('Testing web elements', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#name').type('Griffin')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //To verify alert text using window:alert event with cy.on()
        cy.on('window:alert', (str) => {

            //Using Mocha framework command to compare 2 strings

            expect(str).to.equal('Hello Griffin, share this practice page and share your knowledge')

        } )

        //similarly assertion for confirm popup
        cy.on('window:confirm', (str) => {

            //Using Mocha framework command to compare 2 strings

            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        } )
        

    })
})
