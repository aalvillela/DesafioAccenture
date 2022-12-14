class insurantDataPage {
    elements = {
        firstName: () => cy.get("#firstname").should('be.visible'),
        lastName: () => cy.get("#lastname").should('be.visible'),
        birthDate: () => cy.get("#birthdate").should('be.visible'),
        gender: () => cy.get("#gendermale"),
        streetAddress: () => cy.get("#streetaddress").should('be.visible'),
        country: () => cy.get("#country").should('be.visible'),
        zipcode: () => cy.get("#zipcode").should('be.visible'),
        city: () => cy.get("#city").should('be.visible'),
        occupation: () => cy.get("#occupation").should('be.visible'),
        hobbies: () => cy.get("#other").should('be.visible'),
        website: () => cy.get("#website").should('be.visible'),
        picture: () => cy.get("#picture").should('be.visible'),
        nextBtnInsurantData: () => cy.get("#nextenterproductdata").should('be.visible'),
    }

    inputFirstName() {
        this.elements.firstName().type("Andre");
    }

    inputLastName() {
        this.elements.lastName().type("Villela");
    }

    inputBirthDate() {
        this.elements.birthDate().type("04/25/1991");
    }

    selectGender() {
        this.elements.gender().click({force: true});
    }

    inputAddress() {
        this.elements.streetAddress().type("Rua teste, 80");
    }

    selectCountry() {
        this.elements.country().select("Brazil");
    }

    inputZipCode() {
        this.elements.zipcode().type("123456");
    }

    inputCity() {
        this.elements.city().type("Rio de Janeiro");
    }

    selectOccupation() {
        this.elements.occupation().select("Unemployed");
    }

    selectHobbies() {
        this.elements.hobbies().click({force: true});
    }

    nextStepInsurantData () {
        this.elements.nextBtnInsurantData().click();
    }
}

module.exports = new insurantDataPage();