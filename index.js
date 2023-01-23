// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = {
  readmeTitle: "Enter your README's Title: ",
  readmeDesc: "Enter your README's Description",
  readmeInst: "Enter your README's Installation Instructions",
  readmeUsage: "Enter your README's Usage Information",
  readmeGuidelines: "Enter your README's Contribution Guidlines",
  readmeTest: "Enter your README's Testing Guidlines",
  readmeLicense: "Choose your license for your applicaiton:",
  readmeUsername: "Enter your GitHub username:",
  readmeEmail: "Enter your email address:"

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  
  inquirer
    .prompt([
      {
        type: 'input',
        message: questions.readmeTitle,
        name: 'readmeTitle',
      },
      {
        type: 'input',
        message: questions.readmeDesc,
        name: 'readmeDesc',
      },
      {
        type: 'input',
        message: questions.readmeInst,
        name: 'readmeInst',
      },
      {
        type: 'input',
        message: questions.readmeUsage,
        name: 'readmeUsage',
      },
      {
        type: 'input',
        message: questions.readmeGuidelines,
        name: 'readmeGuidelines',
      },
      {
        type: 'input',
        message: questions.readmeTest,
        name: 'readmeTest',
      },
      {
        type: 'input',
        message: questions.readmeLicense,
        name: 'readmeLicense',
      },
      {
        type: 'input',
        message: questions.readmeUsername,
        name: 'readmeUsername',
      },
      {
        type: 'input',
        message: questions.readmeEmail,
        name: 'readmeEmail',
      },
    ])
    .then((answers => {
        console.info('title: ', answers.readmeTitle), 
        console.info('description: ', answers.readmeDesc), 
        console.info('instructions: ', answers.readmeInst)
      })
  );
    
    
    

}

// Function call to initialize app
init();




/* todo 
    title
    description
    installation inst
    usage info
    contribution guidelines
    test inst
    license choice
    Github username (with link to my profile)
    email address
    
    click on links in table of contents to take me to each sectdion

*/

