class vehicleDataPage {
    elements = {
        makeInput: () => cy.get("#make").should('be.visible'),
        modelInput: () => cy.get("#model").should('be.visible'),
        cylinderCapInput: () => cy.get("#cylindercapacity").should('be.visible'),
        enginerPerfInput: () => cy.get("#engineperformance").should('be.visible'),
        dateManufacInput: () => cy.get("#dateofmanufacture").should('be.visible'),
        numberOfSeatsInput: () => cy.get("#numberofseats").should('be.visible'),
        rightHandDriverYes: () => cy.get("#righthanddriveyes"),
        numberOfSeatsMotoInput: () => cy.get("#numberofseatsmotorcycle").should('be.visible'),
        fuelTypeInput: () => cy.get("#fuel").should('be.visible'),
        payloadInput: () => cy.get("#payload").should('be.visible'),
        totalWeightInput: () => cy.get("#totalweight").should('be.visible'),
        listPriceInput: () => cy.get("#listprice").should('be.visible'),
        plateNumberInput: () => cy.get("#licenseplatenumber").should('be.visible'),
        annualMileageInput: () => cy.get("#annualmileage").should('be.visible'),
        nextBtnVehiclePage: () => cy.get("#nextenterinsurantdata").should('be.visible'),
    }

    selectMake() {

        this.elements.makeInput().select("Nissan");
    }

    selectModel() {
        this.elements.modelInput().select("Moped");
    }

    inputCylinderCap() {
        this.elements.cylinderCapInput().type("1000");
    }

    inputEnginePerf() {
        this.elements.enginerPerfInput().type("500");
    }

    inputDateManufac() {
        this.elements.dateManufacInput().type("05/26/2015");
    }

    inputNumberOfSeats() {
        this.elements.numberOfSeatsInput().select("3");
    }

    selectRightHandDriver() {
        this.elements.rightHandDriverYes().click({force: true});
    }

    inputNumberofSeatsMoto() {
        this.elements.numberOfSeatsMotoInput().select("2");
    }

    selectFuelType() {
        this.elements.fuelTypeInput().select("Diesel");
    }

    inputPayload() {
        this.elements.payloadInput().type("654");
    }

    inputTotalWeight() {
        this.elements.totalWeightInput().type("200");
    }

    inputListPrice() {
        this.elements.listPriceInput().type("3000");
    }

    inputPlateNumber() {
        this.elements.plateNumberInput().type("12345");
    }

    inputAnnualMileage() {
        this.elements.annualMileageInput().type("21456");
    }

    nextStepVehicleData() {
        this.elements.nextBtnVehiclePage().click();
    }
}

module.exports = new vehicleDataPage();