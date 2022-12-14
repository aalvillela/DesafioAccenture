class sendQuotePage {
    elements ={
        email: () => cy.get("#email").should('be.visible'),
        phone: () => cy.get("#phone").should('be.visible'),
        username: () => cy.get("#username").should('be.visible'),
        password: () => cy.get("#password").should('be.visible'),
        confirmPassword: () => cy.get("#confirmpassword").should('be.visible'),
        comments: () => cy.get("#Comments").should('be.visible'),
        sendQuoteBtn: () => cy.get("#sendemail").should('be.visible'),
    }

    inputEmail() {
        this.elements.email().type("teste@hotmail.com");
    }

    inputPhone() {
        this.elements.phone().type("2199999999");
    }

    inputUsername() {
        this.elements.username().type("testeinsurance");        
    }

    inputPassword() {
        this.elements.password().type("Aa123456");
    }

    inputConfirmPassword() {
        this.elements.confirmPassword().type("Aa123456");
    }

    sendQuote() {
        this.elements.sendQuoteBtn().click();        
    }

    assertMessage() {        
        cy.contains('Sending e-mail success!').should('be.visible');
    }
}

module.exports = new sendQuotePage();