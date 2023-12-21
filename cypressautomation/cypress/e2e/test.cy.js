describe('Test Suite', () => {
    before(() => {
      // Execute d.cy.js
      cy.task('runTest', 'a.cy.js');
    });
  
    after(() => {
      // Execute a.cy.js
      cy.task('runTest', 'b.cy.js');
    });
  
    // ... Your actual test cases ...
  });
  