// describe('All Tests', () => {
//     // Define desired execution order
//     const testOrder = ['mytest2.cy.js', 'mytest1.cy.js'];
  
//     beforeEach(() => {
//       cy.visit('https://www.google.com'); // Initial visit to avoid flakes
//     });
  
//     afterEach(() => {
//         cy.clearCookies();
// });
  
//     // Loop through the test order and execute each test
//     testOrder.forEach((testFile) => {
//       it(testFile, () => {
//         cy.require(testFile); // Load and run the test file
//       });
//     });
//   });
  