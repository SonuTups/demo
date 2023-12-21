```javascript
describe('Facebook Login Test', function() {
  it('Login with credentials', function() {
    cy.visit('https://www.facebook.com/')

    // Fixture data
    cy.fixture('loginData').then(function(login) {
      // Step 2
      cy.get('[data-testid=royal_email]').type(login.email)

      // Step 3
      cy.get('[data-testid=royal_pass]').type(login.password)

      // Step 4
      cy.get('[data-testid=royal_login_button]').click()
    })
  })
})

// Fixture data
describe('fixture data', function() {
  it('loginData', function() {
    cy.fixture('loginData.json').as('login')
  })
})
```