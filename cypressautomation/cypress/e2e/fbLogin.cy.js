Here's an example of how you can write Cypress automation scripts for the given steps:

accionWelcome.cy.js:
```javascript
/// <reference types="cypress" />
const data = require('./accionWelcome.json');

context('Facebook Login', () => {
  beforeEach(() => {
    cy.visit(data.urls.loginUrl);
  });

  it('should login to Facebook', () => {
    cy.get(data.locators.emailInput).type(data.values.email);
    cy.get(data.locators.passwordInput).type(data.values.password);
    cy.get(data.locators.loginButton).click();
  });
});
```

accionWelcome.json:
```json
{
  "urls": {
    "loginUrl": "https://www.facebook.com/"
  },
  "locators": {
    "emailInput": "#email",
    "passwordInput": "#pass",
    "loginButton": "#u_0_5_dx"
  },
  "values": {
    "email": "rushi@gmail.com",
    "password": "rushi@123"
  }
}
```

This example assumes that you have a fixture file (accionWelcome.json) with the specified URLs, locators, and values. Adjust the selectors and values according to your specific HTML elements and requirements.