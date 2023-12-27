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
    it.only("save subject of the command", ()=>{
        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click({force: true});
        // cy.contains("nb-card","Using the Grid").find("[for='inputEmail1']").should('contain', "Email")
        
        // const usingGrid = cy.contains("nb-card","Using the Grid");
        // usingGrid.find("[for='inputEmail1']").should('contain', "Email")
        // usingGrid.find("[for='inputPassword2']").should('contain', "Password")
        cy.contains("nb-card","Using the Grid").as("usingGrid");
        cy.get("@usingGrid").find("[for='inputEmail1']").should('contain', "Email");
        cy.get("@usingGrid").find("[for='inputPassword2']").should('contain', "Password");

        cy.contains("nb-card","Using the Grid").then( usingTheGridForm => {
            cy.wrap(usingTheGridForm).find("[for='inputEmail1']").should('contain', "Email");
        })
    })
})