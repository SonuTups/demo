```javascript
describe('Facebook Login Form Test', () => {
  it('Should fill in email and password, then submit the login form', () => {
    cy.visit('/login');
    cy.get('input[data-testid=royal_email]').type('your-email@example.com');
    cy.get('input[data-testid=royal_pass]').type('yourpassword');
    cy.get('button[data-testid=royal_login_button]').click();
  });

  it('Should navigate to the forgotten password page', () => {
    cy.visit('/login');
    cy.get('a[href*="recover/initiate"]').click();
  });

  it('Should navigate to the create new account page', () => {
    cy.visit('/login');
    cy.get('a[data-testid=open-registration-form-button]').click();
  });
});
```