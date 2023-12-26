// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Test suite - Handling web tables with cypress using each command', () => {
    it('Testcase - Handling web tables to get 2nd column 8th rows price value', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // we use nth-child custom selector to get table's complete 2 column 
        // we then use .each() to get text into a const, save the index value when found
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
            const text=$e1.text()
            if(text.includes("Python"))
            {
         
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) // here we use next() to find the move from 1 sibling to another and then we use then() to handle promise
                {
                 const priceText=   price.text()
                 expect(priceText).to.equal('25')
                })
            }
         
        })
        

    })
})
