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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
