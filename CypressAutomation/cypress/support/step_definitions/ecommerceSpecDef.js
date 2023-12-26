/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import Homepage from "../pageObjects/Homepage.cy.js"
import Productpage from "../pageObjects/Productpage.cy.js"
import Checkoutpage from "../pageObjects/Checkoutpage.cy.js"
import Confirmpage from "../pageObjects/Confirmpage.cy.js"



const homepage = new Homepage()
const productpage = new Productpage()
const checkoutpage = new Checkoutpage()
const confirmpage = new Confirmpage()
var sum=0;


beforeEach(function(){

    cy.fixture('properties').then(function (data) { //resolve the promise that fixture methods returns
        globalThis.data = data  // globalThis.variable_name is used to bring the scope of data variable within the whole class and globally accessible
    })
    
})

//Given I open ECommerce Page
Given('I open ECommerce Page', function () {
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

//When I add items to cart
When('I add items to cart', function () {
    homepage.getShopTab().click()
    globalThis.data.productName.forEach((element) => {
        cy.addProduct(element) // here we call the custom cypress command we created to select all products we want.
    })
    productpage.getCheckoutButton().click()
})

//And Validate the total prices
When('Validate the total prices', () => {
    cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {       // creating logic to get sum of products in cart

        const amount = $e1.text().split(" ")
        const res = amount[1].trim()                                        // here, we use trim to select 2nd part of string (i.e 1234) and not (Rs. )
        sum = Number(sum) + Number(res)
    })

    cy.get('tr td:nth-child(5) strong').then(function (element) {     // Now creating same logic to compare the sum of products with the total
        const amount1 = element.text().split(" ")
        const res1 = amount1[1].trim()
        var total = Number(res1)
        expect(total).to.equal(sum)     //assertion javascript expect statement present here
    })


})

//Then Select the country submit and verify Thankyou
Then('Select the country submit and verify Thankyou', () => {
    checkoutpage.getCheckoutButton2().click()
    confirmpage.getEditBoxCountry().type('India')
    confirmpage.getSuggestionCountrySelect().click()
    confirmpage.getTermsandConditionsCheckbox().check({ force: true })
    confirmpage.getPurchaseButton().click()
    confirmpage.getAlertMessage().should('include.text', 'Success!')
})
