// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Test suite - MouseHover', () => {
    it('Handling MouseHover using Jquery show()', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        cy.get('.mouse-hover-content a[href="#top"]').click({force: true})  // if you directly want to click on invisible element after mousehover use this command
        
        //but if u want to verify if popup is displaying on mouse hover and then click on top button, we have to use show() using invoke()
        // eg. .invoke('show')
        // show method should be applied on immediate parent of hidden element

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('contain','top')

        
    })
})