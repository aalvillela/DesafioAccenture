class productDataPage {
    elements = {
        startDate: () => cy.get("#startdate").should('be.visible'),
        insuranceSum: () => cy.get("#insurancesum").should('be.visible'),
        meritRating: () => cy.get("#meritrating").should('be.visible'),
        damageInsurance: () => cy.get("#damageinsurance").should('be.visible'),
        optProducts: () => cy.get("#EuroProtection"),
        courtesyCar: () => cy.get("#courtesycar").should('be.visible'),
        nextStepBtnSelectPrice: () => cy.get("#nextselectpriceoption").should('be.visible'),
    }

    inputStartDate() {
        this.elements.startDate().type("03/15/2023");
    }

    selectInsuranceSum() {
        this.elements.insuranceSum().select("3000000");
    }

    selectMeritRating() {
        this.elements.meritRating().select("Bonus 6");
    }

    selectDamageInsurance() {
        this.elements.damageInsurance().select("Full Coverage");
    }

    selectOptionalProducts() {
        this.elements.optProducts().click({force: true});
    }

    selectCourtesyCar() {
        this.elements.courtesyCar().select("Yes");
    }

    nextStepProductData() {
        this.elements.nextStepBtnSelectPrice().click();
    }
}

module.exports = new productDataPage();