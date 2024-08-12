class LoginPage {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    login() {
        cy.visit("https://web.hishabee.business",{ timeout: 60000 });
        cy.get('[type="number"]',{ timeout: 60000 }).click().type(this.username);
        cy.get('.space-y-space16 > .inline-flex').click({ force: true });
        cy.get('#current_password',{ timeout: 60000 }).should('be.visible').click().type(this.password);
        cy.get('.bg-primary-90', { timeout: 60000 }).should('be.visible').click();
        cy.get(':nth-child(1) > .mt-space32', { timeout: 60000 }).should('be.visible').click();
    }
}

export default LoginPage;
