// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = {
  readmeTitle: "Enter your README's Title: ",
  readmeDesc: "",
  readmeInst: "",
  readmeUsage: "",
  readmeGuidelines: "",
  readmeTest: "",
  readmeLicense: "",
  readmeUsername: "",
  readmeEmail: ""

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'questions.readmeTitle',
        name: 'readmeTitle',
      },
      {
        type: 'input',
        message: 'Enter your README\'s Description:',
        name: 'readmeDesc',
      },
      {
        type: 'input',
        message: 'Enter your README\'s installation instructions:',
        name: 'readmeInst',
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

