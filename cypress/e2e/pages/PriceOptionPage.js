class priceOptionPage {
    elements = {
        silverRadioBtn: () => cy.get("#selectsilver"),
        goldRadioBtn: () => cy.get("#selectgold"),
        platinumRadioBtn: () => cy.get("#selectplatinum"),
        ultimateRadioBtn: () => cy.get("#selectultimate"),
        nextStepBtnSendQuote: () => cy.get("#nextsendquote"),
    }

    selectUltimateBtn() {
        this.elements.ultimateRadioBtn().click({force: true});
    }

    nextStepPriceOption() {
        this.elements.nextStepBtnSendQuote().click();
    }
}

module.exports = new priceOptionPage();
