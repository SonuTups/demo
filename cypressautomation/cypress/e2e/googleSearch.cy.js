// accionWelcome.cy.js

describe('Accion Welcome Test', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('should type and search', () => {
    cy.fixture('accionWelcome.json').then((data) => {
      cy.get(data.textAreaLocator).click().type('Kas kay chalu he{enter}')
    })
  })
})
  
// accionWelcome.json
{
  "textAreaLocator": "textarea[name='q']"
}