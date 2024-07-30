// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project:",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "Enter installation instructions for your project:",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "Enter usage information for your project:",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Enter contribution guidelines for your project:",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Enter test instructions for your project:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fs = require("fs");

  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log(`${fileName} has been successfully created.`);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = `
  # ${answers.projectTitle}
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installationInstructions}
  
  ## Usage
  ${answers.usageInformation}
  
  ## Contribution Guidelines
  ${answers.contributionGuidelines}
  
  ## Test Instructions
  ${answers.testInstructions}
  `;

    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
