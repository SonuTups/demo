The Cypress script (accionWelcome.cy.js) to automate the given steps is as follows:

```JavaScript
describe('Automation of the Accion Welcome page', function() {
    before(function() {
        cy.visit(Cypress.env("accionUrl"));
    });

    it('should type the given text in the textarea and hit enter', function() {
        cy.get(Cypress.env("textareaLocator"))
            .type('Kas kay chalu he{enter}');
    });
});
```

The fixture file (accionWelcome.json) containing the configuration data for URLs and locators is as follows:

```json
{
  "accionUrl": "https://www.google.com/",
  "textareaLocator": "#APjFqb"
}
```