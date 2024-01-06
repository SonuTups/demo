```javascript
// accionWelcome.cy.js

describe('Facebook Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('facebookUrl'));
  });

  it('should fill in email and password and click login', () => {
    cy.fixture('accionWelcome.json').then((data) => {
      cy.get(data.emailInput).type(data.email);
      cy.get(data.passwordInput).type(data.password);
      cy.get(data.loginButton).click();
    });
  });
});
```

```json
// accionWelcome.json

{
  "emailInput": "input[data-testid='royal_email']",
  "passwordInput": "input[data-testid='royal_pass']",
  "loginButton": "button[data-testid='royal_login_button']",
  "email": "rushi@gmail.com",
  "password": "rushi@123"
}
```