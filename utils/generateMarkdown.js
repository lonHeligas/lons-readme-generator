// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseIcon;
  switch (license) {
    case 'Apache 2.0':
      licenseIcon = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'gnuLi':
      licenseIcon = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'mitLi':
      licenseIcon = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'mozillaLi':
      licenseIcon = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;    
    case null:
      licenseIcon = '';
  }
  return licenseIcon;
  
}

// TODO: Create a function that returns the license link



// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseIcon;
  switch (license) {
    case 'Apache 2.0':
      licenselink = 'https://choosealicense.com/licenses/apache-2.0/';
      break;
    case 'gnuLi':
      licenselink = 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case 'mitLi':
      licenselink = 'https://choosealicense.com/licenses/mit/';
      break;
    case 'mozillaLi':
      licenselink = 'https://choosealicense.com/licenses/mpl-2.0/';
      break;    
    case null:
      licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README



// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
