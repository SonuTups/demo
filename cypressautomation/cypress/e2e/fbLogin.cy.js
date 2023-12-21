```javascript
describe('Facebook Login Test', () => {
  it('should perform login action', () => {
    cy.visit('https://www.facebook.com/')
    
    // Using fixture data for locators and values
    cy.fixture('facebook_login').then((data) => {
      cy.get(data.emailInput).type(data.emailValue)
      cy.get(data.passwordInput).type(data.passwordValue)
      cy.get(data.loginButton).click()
    })
  })
})

// Fixture data
// Email and password locators and values
// facebook_login.json
{
  "emailInput": "#email",
  "emailValue": "rushi@gmail.com",
  "passwordInput": "#pass",
  "passwordValue": "rushi@123",
  "loginButton": "#u_0_5_dx"
}
```