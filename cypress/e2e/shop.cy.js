describe("Create a new Shop & Switch to another shop", () => {


    it("Create a new shop", () => {

        cy.visit("https://web.hishabee.business");
        cy.get('[type="number"]').click().type('01786368387');
        cy.get('.space-y-space16 > .inline-flex').click({ force: true });
        cy.get('#current_password').click().type('12345');
        cy.get('.bg-primary-90', { timeout: 30000 }).should('be.visible').click();
        cy.contains('button', 'Add New Shop', { timeout: 30000 }).click();
        cy.get('input[name="name"]').type('New Shop');
        cy.get(':nth-child(3) > .inline-flex').eq(0).click({ force: true });
        cy.contains('div[role="option"]', 'Clothing').click({ force: true });
        cy.get('button[role="combobox"]').contains('Select Divisions...').click({ force: true });
        cy.get('div[role="option"][data-value="4"]').contains('Dhaka').click({ force: true });
        cy.get('button[role="combobox"]').contains('Select Districts...').click({ force: true });
        cy.get('div[role="option"][data-value="22"]').contains('Kishoreganj').click({ force: true });
        cy.get('button[role="combobox"]').contains('Select Area...').click({ force: true });
        cy.get('div[role="option"][data-value="223"]').contains('Katiadi').click({ force: true });
        cy.get('input[name="address"]').type('123 Main Street, 1212, Masua', { force: true });
        cy.get('button[value="yes"]').click({ force: true });
        cy.get('button[type="submit"]').contains('Create Shop').click({ force: true });

    })

    it("Switch Shop", () => {

        cy.visit("https://web.hishabee.business");
        cy.get('[type="number"]').click().type('01786368387');
        cy.get('.space-y-space16 > .inline-flex').click({ force: true });
        cy.get('#current_password').click().type('12345');
        cy.get('.bg-primary-90', { timeout: 30000 }).should('be.visible').click();
        cy.get(':nth-child(1) > .mt-space32', { timeout: 30000 }).should('be.visible').click();
        cy.get('.relative > .flex', { timeout: 30000 }).should('have.text', 'MM').click()
        cy.get('a.relative.flex.cursor-default.select-none.items-center[href="/settings/lang"]', { timeout: 30000 }).click();
        cy.get('path[d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41L9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12L7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"]', { timeout: 30000 }).click({ force: true });
        cy.get('.space-y-space4 > :nth-child(1) > .w-full > .text-text500', { timeout: 30000 }).click();
        cy.get(':nth-child(3) > .mt-space32', { timeout: 30000 }).should('be.visible').click();


    })


})
