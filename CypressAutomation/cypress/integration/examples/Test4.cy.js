// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('handling child windows(switching to new tab)', () => {
    it('Handing child window(newtab) with new domain', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // As cypress cannot switch to new tab, we use invoke funct and pass 1 argument as remove attr, and 2nd target attr
        // here in dev terminology, when we switch tab, in html, we pass within the html tag--> target="_blank"

        cy.get('#opentab').invoke('removeAttr','target').click()

        //since a new web url domain is now present on switched tab, we have to call cy.origin to pass the new web url domain,
        cy.origin('https://www.qaclickacademy.com/', ()=>{
            // whatver commands we want to execute within new domain we have to pass here
            cy.get('#navbarSupportedContent a[href="about.html"]').click()  //we click on about us 4
            //we are now on about us page
            cy.get('.mt-50 h2').should('have.text','Welcome to QAClick Academy ') //assertion on about us page
        })
        

    })
})
