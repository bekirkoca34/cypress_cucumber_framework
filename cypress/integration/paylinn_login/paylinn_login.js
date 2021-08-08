import { Given,And,When, Then } from "cypress-cucumber-preprocessor/steps";

 //const url = 'https://google.com'
Given('user in on the application page', () => {
  cy.visit('https://paylinn.com/')

})

And('clicks on login link', () => {
    cy.contains('Sign In').click()
  
  })

  And('user enters username and password', () => {
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User')
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user')

  })
  And('clicks on login button', () => {
    cy.get('.MuiButton-label').click()
  
  })
  //cy.get('.header__title')
  Then('verify default page is displayed', () => {
   // cy.get('.header__title')
   // .should('have.text','Paylinn')
    cy.get('.header__nav > :nth-child(1) > .header__lineOne')
    .should('contain','Welcome')
  
  })