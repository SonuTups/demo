I can help you with creating the Cypress script and the fixtures file. Below is the script file, `accionWelcome.cy.js`, and the fixture file, `accionWelcome.json`, for the steps you provided:

accionWelcome.cy.js
```javascript
describe('Google search test', function() {
  before(function() {
    cy.fixture('accionWelcome').then(function(data) {
      this.data = data;
    });
  });

  it('Open Google and perform search', function() {
    cy.visit(this.data.googleUrl);
    cy.get(this.data.textArea).click().type(this.data.searchText).type('{enter}');
  });
});
```

accionWelcome.json
```json
{
  "googleUrl": "https://www.google.com/",
  "textArea": "textarea[name='q']",
  "searchText": "Kas kay chalu he"
}
```

Please ensure to create a `fixtures` directory in your Cypress project and place the `accionWelcome.json` file in it. Also, create a `specs` directory and place the `accionWelcome.cy.js` file in it.