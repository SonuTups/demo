```javascript
describe('Facebook Login Automation', () => {
  it('Log in to Facebook', () => {
    // Fixture Data
    cy.fixture('loginData').then((data) => {
      const {
        emailPlaceholder,
        emailValue,
        passwordPlaceholder,
        passwordValue,
        loginButton
      } = data;

      // Test Steps
      cy.visit('https://www.facebook.com/');

      cy.get('[data-testid=royal_email]').should('have.attr', 'placeholder', emailPlaceholder)
        .type(emailValue);

      cy.get('[data-testid=royal_pass]').should('have.attr', 'placeholder', passwordPlaceholder)
        .type(passwordValue);

      cy.get('[data-testid=royal_login_button]').click();
    });
  });
});

// Fixture Data
describe('Fixture Data', () => {
  it('loginData', () => {
    cy.writeFile('cypress/fixtures/loginData.json', {
      "emailPlaceholder": "Email address or phone number",
      "emailValue": "rushi@gmail.com",
      "passwordPlaceholder": "Password",
      "passwordValue": "rushi@123",
      "loginButton": "Log in"
    });
  });
});
```