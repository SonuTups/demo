```javascript
describe('Facebook Login Test', () => {
  it('should login to Facebook with given credentials', () => {
    // Step 1: Open https://www.facebook.com/
    cy.visit('https://www.facebook.com/');

    // Step 2: Navigate to 'Email address or phone number' placeholder and write value 'rushi@gmail.com'
    cy.get('[data-testid=royal_email]').type('rushi@gmail.com');

    // Step 3: Navigate to 'password' placeholder and add 'rushi@123' as the value
    cy.get('[data-testid=royal_pass]').type('rushi@123');

    // Step 4: Navigate to 'Login' button and click that button
    cy.get('[data-testid=royal_login_button]').click();
  });
});

// Fixture Data
// Please replace the locators, values, and URLs with appropriate data
describe('fixture data', () => {
  before(() => {
    cy.fixture('loginCredentials.json').as('loginData');
  });

  it('loginCredentials', function () {
    const { email, password } = this.loginData;
    cy.visit('https://www.facebook.com/');
    cy.get('[data-testid=royal_email]').type(email);
    cy.get('[data-testid=royal_pass]').type(password);
    cy.get('[data-testid=royal_login_button]').click();
  });
});
```
Fixture Data:
```json
{
  "email": "rushi@gmail.com",
  "password": "rushi@123"
}
```