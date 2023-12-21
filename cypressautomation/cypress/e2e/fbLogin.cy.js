```javascript
describe('Facebook Login Test', () => {
  it('Login with Email and Password', () => {
    cy.visit('https://www.facebook.com/')

    // Fixture data
    cy.fixture('loginData').then((data) => {
      const email = data.email
      const password = data.password

      // Step 2
      cy.get('input[data-testid="royal_email"]').type(email)

      // Step 3
      cy.get('input[data-testid="royal_pass"]').type(password)

      // Step 4
      cy.get('button[data-testid="royal_login_button"]').click()
    })
  })
})

// Fixture data
describe('Fixture data', () => {
  beforeEach(() => {
    cy.fixture('loginData').as('data')
  })

  it('Login Data', function () {
    cy.log('email: ' + this.data.email)
    cy.log('password: ' + this.data.password)
  })
})
```

Fixture Data:
```json
{
  "email": "rushi@gmail.com",
  "password": "rushi@123"
}
```