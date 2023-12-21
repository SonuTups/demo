```javascript
describe('Facebook Login Test', () => {
  it('should login to Facebook with valid credentials', () => {
    // Step 1: Open https://www.facebook.com/
    cy.visit('https://www.facebook.com/');

    // Step 2: Navigate to 'Email address or phone number' placeholder and enter 'rushi@gmail.com'
    cy.fixture('locators').then((loc) => {
      cy.get(loc.emailInput).type('rushi@gmail.com');
    });

    // Step 3: Navigate to 'password' placeholder and enter 'rushi@123' as the password
    cy.fixture('testData').then((data) => {
      cy.get('input[name="pass"]').type(data.password);
    });

    // Step 4: Navigate to 'Login' button and click it
    cy.fixture('locators').then((loc) => {
      cy.get(loc.loginButton).click();
    });
  });
});


// Fixture Data
// Locators
{
  "emailInput": "input[data-testid=royal_email]",
  "loginButton": "button[data-testid=royal_login_button]"
}

// Test Data
{
  "password": "rushi@123"
}
```