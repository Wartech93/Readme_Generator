
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
