// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(data) {
  // console.log(`this is the license: ${data.license}`);
  
  switch (data.license) {
    case 'Apache 2.0':
      licenseIcon = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU GPL V3':
      licenseIcon = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'The MIT License':
      licenseIcon = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla Public License 2.00':
      licenseIcon = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;    
    case null:
      licenseIcon = '';
  }
  // console.log(`licenseIcon ${licenseIcon}`);
  return licenseIcon;  
}

// TODO: Create a function that returns the license link



// If there is no license, return an empty string
function renderLicenseLink(data) {
  // console.log(`this is the license: ${data.license}`);  
  switch (data.license) {    
    case 'Apache 2.0':
      licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
      break;
    case 'GNU GPL V3':
      licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case 'The MIT License':
      licenseLink = 'https://choosealicense.com/licenses/mit/';
      break;
    case 'Mozilla Public License 2.00':
      licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
      break;    
    case null:
      licenseLink = '';
  }
  // return licenseLink;
}

// TODO: Create a function that returns the license section of README



// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  
  return `# ${data.readmeTitle}
  
## Contents
  
- [License](#license)
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
   

## License
${licenseIcon}

[${data.license}](${licenseLink})

## Description 

${data.readmeDesc}
## Installation Instructions

${data.readmeInst}
## Usage Information

${data.readmeUsage}
## Contribution Guidelines

${data.readmeGuidelines}
## Test Instructions

${data.readmeTest}

## Questions
GitHub: [https://github.com/${data.readmeUsername}]

Contact me with any quesitons @
[mailto:${data.readmeEmail}]

`;
}

module.exports = generateMarkdown;
