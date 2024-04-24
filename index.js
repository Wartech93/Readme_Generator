
// allow import inquirer within js
const fs = require('fs');
const inquirer = require('inquirer');

//select license with numberical value
const licenseChoices = [  
  {name: 'MIT License', value: 'MIT'},
  {name: 'Apache License 2.0', value: 'Apache-2.0'},
  {name: 'GNU GPLv3', value: 'GNU GPLv3'}
];
//all question prompts for input to readme
  const questions = [
    
    { type: 'input', name: 'title', message: 'Enter the title of your project: '},
    { type: 'input', name: 'description', message: 'Enter a description for your project: '},
    { type: 'input', name: 'installation', message: 'Enter installation instruction for your project:'},
    { type: 'input', name: 'usage', message: 'Enter usage information:'},
    { type: 'input', name: 'github', message: 'Enter your GitHub username:'},
    { type: 'input', name: 'email', message: 'Enter your Email:'},
    { type: 'list', name: 'license', message: 'Select a license for your project:',
        choices: licenseChoices
    }
];      
//assigns license to licensebadge
function generateReadme() {
    inquirer.prompt(questions).then(answers => {
  
            let licenseBadge = "";

            // Define license badges
            switch (answers.license) {
              case "MIT":
                licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
              case "Apache-2.0":
                licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
              case "GNU GPLv3":
                licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
              default:
                licenseBadge = "";
            }
//content for readme to be created as
            const readmeContent = `
# ${answers.title} ${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.


## Questions
Here is the link to my git hub!
https://github.com/${answers.github}

You can reach me at: 
${answers.email}

`;

            const fileName = 'README.md';

            fs.writeFile(fileName, readmeContent, (err) => {
              if (err) {
                console.error('Error writing README file:', err);
              } else {
                console.log(`README file generated: ${fileName}`);
              }
            });
          });
        };
        //call generateratereadme function
generateReadme();