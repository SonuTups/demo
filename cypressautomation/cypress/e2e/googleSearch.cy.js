I can generate Cypress scripts for you, but currently, I don't have the capability to create files directly. However, you can use the provided script as a reference to create your Cypress automation scripts.

```javascript
describe('Accion Welcome Test', () => {
  before(() => {
    cy.visit('URL_HERE')
  })

  it('should type "Kas kay chalu he" in the search bar', () => {
    cy.fixture('accionWelcome').then((data) => {
      cy.get(data.searchBox).type('Kas kay chalu he{enter}')
    }) 
  })

  // Add more tests as per your requirement
})
```

In the above code, replace `URL_HERE` with the actual URL. Also, in the fixtures file (`accionWelcome.json`), you should define the `searchBox` locator.

fixture file (accionWelcome.json):
```json
{
  "searchBox": "#APjFqb"
}
```