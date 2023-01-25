// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'readmeTitle',
        message: 'Enter your README\'s Title:',
        validate: (response) => {
          if (response === ''){
            return 'Your README still needs a title.'
          }
          return true
        }
      },
      {
        type: 'input',
        name: 'readmeDesc',
        message: 'Enter your README\'s Description',
        validate: (response) => {
          if (response === ''){
            return 'Your README still needs a description.'
          }
          return true
        }
      },
      {
        type: 'input',
        name: 'readmeInst',
        message: 'Enter your README\'s Installation Instructions',
        validate: (response) => {
          if (response === ''){
            return 'Your README still needs a installation instructions.'
          }
          return true
        }
      },
      {
        type: 'input',
        name: 'readmeUsage',
        message: 'Enter your README\'s Usage Information',
        validate: (response) => {
          if (response === ''){
            return 'Your README still needs usage information.'
          }
          return true
        }
      },
      {
        type: 'input',
        name: 'readmeGuidelines',
        message: 'Enter your README\'s Contribution Guidlines',
        validate: (response) => {
          if (response === ''){
            return 'Your README still needs contribution guidelines.'
          }
          return true
        }
      },
      {
        type: 'input',
        name: 'readmeTest',
        message: 'Enter your README\'s Testing Guidlines',
        validate: (response) => {
          if (response === ''){
            return 'Your README still needs testing guidelines.'
          }
          return true
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your applicaiton:',
        choices: [
          {name: 'apacheLi', value: 'Apache 2.0'},          
          {name: 'gnuLi', value: 'GNU GPL V3'},
          {name: 'mitLi',value: 'The MIT License'},
          {name: 'mozillaLi', value: ' Mozilla Public License 2.00'},
        ],
        default: 'mitLi'
      },
      {
        type: 'input',
        message: 'Enter your GitHub username (URL only, no http://):',
        name: 'readmeUsername',
        validate: (response) => {
          if (response === ''){
            return 'I need your GitHub username, please.'
          }
          return true
        }
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'readmeEmail',
        validate: (response) => {
          if (response === ''){
            return 'I need your email address please. (I promise I will send you no spam.)'
          }
          return true
        }
      },
      {
        type: 'input',
        message: 'Enter your filename (Hint: it\'s usually "README"):',
        name: 'readmeFilename',
        validate: (response) => {
          if (response === ''){
            return 'I need your filename, please.'
          }
          return true
        }
      },
    ];
    
    
    
    
    
    // TODO: Create a function to write README file
    function writeToFile(fileName, answers) {
      fs.writeFile(`./${fileName}.md`, generateMarkdown(answers), (err) => {
          err ? console.log(err) : console.log("Success!");
            
        }
        )}
        
        


        
        
        // fs.writeFile(filename, data, (err) => {
        // }
        // )};
        
// TODO: Create a function to initialize app
function init(){
  inquirer.prompt(questions).then(answers => {
    // console.log(answers)
    writeToFile(answers.readmeFilename, answers);
  })



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

