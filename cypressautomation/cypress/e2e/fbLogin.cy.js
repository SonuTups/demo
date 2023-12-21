```javascript
describe('Facebook Login Test', () => {
  it('Perform Facebook Login', () => {
    cy.visit('https://www.facebook.com/');

    // Fixture Data
    cy.fixture('loginData').then((data) => {
      const email = data.email;
      const password = data.password;

      // Step 2
      cy.get('input[data-testid="royal_email"]').type(email);

      // Step 3
      cy.get('input[data-testid="royal_pass"]').type(password);

      // Step 4
      cy.get('button[data-testid="royal_login_button"]').click();
    });
  });
});

// Fixture data
describe('Fixture data', () => {
  // Declare fixture data for login
  beforeEach(function () {
    cy.fixture('loginData').then(function (data) {
      this.email = data.email;
      this.password = data.password;
    });
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