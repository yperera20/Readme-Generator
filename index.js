const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application
// You might include a module like 'generateMarkdown' here

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Explain how to install the project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how to use the project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Explain how others can contribute to the project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide information on running tests:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md has been created successfully!');
    }
  });
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // You should define this function to create the README content
  // It should take the user's input (data) and format it into a README string
  // You can use the data object to access the user's responses to the questions
  // and format them into a README content.
  // For example:
  const markdown = `
  # ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}
  `;

  return markdown;
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
