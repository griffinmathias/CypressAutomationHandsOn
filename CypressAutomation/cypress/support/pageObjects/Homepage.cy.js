class Homepage {

    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }

    getGender(){
        return cy.get('select')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default Homepage
