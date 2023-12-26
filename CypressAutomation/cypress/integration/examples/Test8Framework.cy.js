// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import Homepage from "../../support/pageObjects/Homepage.cy"
import Productpage from "../../support/pageObjects/Productpage.cy"
import Checkoutpage from "../../support/pageObjects/Checkoutpage.cy"
import Confirmpage from "../../support/pageObjects/Confirmpage.cy"


describe('Data driven framework', () => {

    before(function () {
        //runs once before all tests in the block

        cy.fixture('properties').then(function (data) { //resolve the promise that fixture methods returns
            globalThis.data = data  // globalThis.variable_name is used to bring the scope of data variable within the whole class and globally accessible
        })

    })

    it('Data driven example', () => {
        const homepage = new Homepage()
        const productpage = new Productpage()
        const checkoutpage = new Checkoutpage()
        const confirmpage = new Confirmpage()

        var sum = 0

        cy.visit(Cypress.env('url') +'/angularpractice/')

        //Executing on Homepage

        homepage.getEditBox().type(globalThis.data.name)
        homepage.getGender().select(globalThis.data.gender)
        homepage.getTwoWayBinding().should('have.value', globalThis.data.name)
        homepage.getEditBox().should('have.attr', 'minlength', '2')  //assert the attribute name minlength for element name, if its minimumlength should be 2
        homepage.getEntrepreneur().should('be.disabled')
        homepage.getShopTab().click()

        //Executing on Productpage

        globalThis.data.productName.forEach((element) => {
            cy.addProduct(element) // here we call the custom cypress command we created to select all products we want.
        })

        productpage.getCheckoutButton().click()

        //Executing on checkout page

        cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {       // creating logic to get sum of products in cart

            const amount = $e1.text().split(" ")
            const res = amount[1].trim()                                        // here, we use trim to select 2nd part of string (i.e 1234) and not (Rs. )
            sum = Number(sum) + Number(res)
        })

        cy.get('tr td:nth-child(5) strong').then(function(element){     // Now creating same logic to compare the sum of products with the total
            const amount1 = element.text().split(" ")
            const res1 = amount1[1].trim()
            var total = Number(res1)
            expect(total).to.equal(sum)     //assertion javascript expect statement present here
        })
        

        checkoutpage.getCheckoutButton2().click()   //after assertion, we click on 

        //Executing on confirm page

        confirmpage.getEditBoxCountry().type('India')
        confirmpage.getSuggestionCountrySelect().click()
        confirmpage.getTermsandConditionsCheckbox().check({ force: true })
        confirmpage.getPurchaseButton().click()
        confirmpage.getAlertMessage().should('include.text', 'Success!')

    })
})
