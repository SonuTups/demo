```javascript
describe('Login Functionality Test', () => {
  it('Should fill in email and password and click login button', () => {
    cy.visit('/login');
    cy.get('input[data-testid=royal_email]').type('testuser@example.com');
    cy.get('input[data-testid=royal_pass]').type('password123');
    cy.get('button[data-testid=royal_login_button]').click();
  });

  it('Should navigate to forgotten password page', () => {
    cy.visit('/login');
    cy.get('a[href*="forgotten"]').click();
  });

  it('Should navigate to create new account page', () => {
    cy.visit('/login');
    cy.get('a[data-testid=open-registration-form-button]').click();
  });
});
```