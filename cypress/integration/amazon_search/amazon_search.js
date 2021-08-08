import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";

Given('user is on the amazon page', () => {
    cy.visit("https://www.amazon.com/")

    cy.get('#twotabsearchtextbox').click()
  })

   When('user search for {string}', (items) => {
   cy.get('#twotabsearchtextbox').type(items)
   cy.get('#nav-search-submit-button').click({force:true})
})

When('verify the result has {string}', (items) => {
    //Verifying if page title includes capitals
    cy.title().should('include',items)
    
    })
    