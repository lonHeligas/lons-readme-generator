// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'Enter your README\'s Title:',
        name: 'readmeTitle',
      },
      {
        type: 'input',
        message: 'Enter your README\'s Description',
        name: 'readmeDesc',
      },
      {
        type: 'input',
        message: 'Enter your README\'s Installation Instructions',
        name: 'readmeInst',
      },
      {
        type: 'input',
        message: 'Enter your README\'s Usage Information',
        name: 'readmeUsage',
      },
      {
        type: 'input',
        message: 'Enter your README\'s Contribution Guidlines',
        name: 'readmeGuidelines',
      },
      {
        type: 'input',
        message: 'Enter your README\'s Testing Guidlines',
        name: 'readmeTest',
      },
      {
        type: 'list',
        message: 'Choose your license for your applicaiton:',
        name: 'readmeLicense',
        choices: [
          {name: 'apacheLi', value: 'Apache 2.0'},          
          {name: 'gnuLi', value: 'GNU GPL V3'},
          {name: 'mitLi',value: 'The MIT License'},
          {name: 'mozillaLi', value: ' Mozilla Public License 2.00'},
        ]

        /*
          Apache 2.0          
          GNU GPL v3
          The MIT License
          Mozilla Public License 2.00
        */
      },
      {
        type: 'input',
        message: 'Enter your GitHub username (URL only, no http://):',
        name: 'readmeUsername',
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'readmeEmail',
      },
    ];
  
 



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  
  const init = async () =>{
    let answers = await inquirer.prompt(questions)
  }
  
    
    
    

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

