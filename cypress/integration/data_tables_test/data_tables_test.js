import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";

Given('user is on the application page', () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/Account/Logon")
   // cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
    
  })

 And('user login with below data', (dataTable) => {
  cy.get('#UserName')
  .type(dataTable.rawTable[1][0])
  cy.get('#Password')
    .type(dataTable.rawTable[1][1])
   .wait(3000)
    
  })
 
  And('clicks on login button', () => {
    cy.get('#btnSubmit').click()
    
  })
  Then('verify dafault page is displayed', () => {
    cy.get('.username')
    .should('contain.text','manager')
    
  })
