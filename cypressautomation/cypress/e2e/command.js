const { execSync } = require('child_process');

// Define the commands
const path1 = 'cypress/e2e/b.cy.js'
const path2 = 'cypress/e2e/a.cy.js'
const path3 = 'cypress/e2e/d.cy.js'
const path4 = 'cypress/e2e/c.cy.js'
const path5 = 'cypress/e2e/mytest1.cy.js'


const commands = [
  `npx cypress run --spec ${path1}`,
  `npx cypress run --spec ${path2}`,
  `npx cypress run --spec ${path3}`,
  `npx cypress run --spec ${path4}`,
  `npx cypress run --spec ${path5}`,
];

// Execute each command and capture the output
commands.forEach((command) => {
  const output = execSync(command, { encoding: 'utf-8' });
  console.log(output);
});

// Handle any errors
if (process.exitCode > 0) {
  console.error('Error during Cypress execution');
//   process.exit(1);
} else {
  console.log('Cypress execution completed successfully');
}
