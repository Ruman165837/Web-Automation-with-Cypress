import LoginPage from '../pages/LoginPage';

describe("Login Successfully with valid user credentials", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    const loginPage = new LoginPage("01786368387", "12345");
    loginPage.login();
  })

  it("Valid Login & Logout ", () => {

    cy.get('span.flex.h-full.w-full.items-center.justify-center.rounded-full', { timeout: 60000 })
      .should('contain', 'MM')
      .click();
    // cy.get('#radix-\\:r0\\:', { timeout: 60000 })
    // .should('be.visible')
    // .click();
    cy.contains('div.cursor-pointer', 'Logout', { timeout: 60000 })
    .should('be.visible')
    .click();

  })

})