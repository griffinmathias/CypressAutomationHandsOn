class Confirmpage {

    getEditBoxCountry() {
        return cy.get('#country')
    }

    getSuggestionCountrySelect() {
        return cy.get('.suggestions > ul > li > a')

    }

    getTermsandConditionsCheckbox() {
        return cy.get('#checkbox2')
    }

    getPurchaseButton() {
        return cy.get('input[value="Purchase"]')
    }

    getAlertMessage() {
        return cy.get('.alert')
    }

}


export default Confirmpage
