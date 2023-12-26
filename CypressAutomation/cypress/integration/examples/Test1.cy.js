// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').click().type('ca')



    // cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    //cy.get('input.search-keyword').should('have.value', 'abc')  //negative test
    cy.get('input.search-keyword').should('have.value', 'ca') //positive test

    //use an alias to re-use the locators
    cy.get('.products').as('productParentLocator')
    //cy.get('.product:visible').should('have.length', 4)
    cy.get('@productParentLocator').find('.product').should('have.length', 4)

    //click add to cart for capsicum using Parent Child Chaining concepts with hardcoding using eq():

    cy.get('@productParentLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {  //here we use .eq() to get DOM element from list of array and handle promise using then()
      console.log('sf')   // here promise is handled manually above to make sure once above command is resolved, we print console.log
    })

    //click add to cart for Cashews using Parent Child Chaining concepts without hardcoding using each():
    cy.get('@productParentLocator').find('.product').each(($el, index, $list) => {       //here we use .each() for loop

      const VegText = $el.find('h4.product-name').text()
      if (VegText.includes('Cashews')) {
        cy.wrap($el).contains('ADD TO CART').click()
      }

    //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text', 'GREENKART')

    //this is to print in logs
    cy.get('.brand').then(function (logoelement) {
        cy.log(logoelement.text())

      })
    })
    cy.get('.cart-icon > img').click() // clicks on cart button
    cy.contains('PROCEED TO CHECKOUT').click() //clicks on checkout button
    cy.contains('Place Order').click()
  })
})