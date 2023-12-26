// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Test suite - Iframes', () => {
    it('IFrames Automation', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.iframe().find('.pricing-title').should('have.length','2')  //assert that it contains 2 packages i.e bronze and platinum within mentorship page of iframe

    })

})
