/// <reference types="cypress" />

describe("First test suit", () => {
    it("First test suit", () => {
        cy.visit("/")
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click()
        // cy.get("input") d
        cy.contains("Sign in");
        cy.contains('[status="warning"]',"Sign in");
        cy.contains('nb-card', "Horizontal form").find("button")
        cy.contains('nb-card', "Horizontal form").contains("Sign in");

        cy.get("#inputEmail3")
        .parents("form")
        .find("button") 
        .should("contain", "Sign in")
        .parents("form")
        .find('nb-checkbox')
        .click({force: true})
    })
})