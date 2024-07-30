// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Return the license badge based on the license type
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Return the license link based on the license type
    return `https://opensource.org/licenses/${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // Return the license section text based on the license type
    return `This project is licensed under the [${license}](${renderLicenseLink(
      license
    )}) license.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const githubLink = data.githubUser
    ? `[GitHub](https://github.com/${data.githubUser})`
    : "";
  const emailLink = data.email ? `[Email](mailto:${data.email})` : "";

  return `# ${data.projectTitle}
  
  ${licenseBadge}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution)
- [Test Instructions](#test)
- [License](#license)
- [Questions](#questions)
  
  ## Description
  <a name= "description"></a>
  ${data.description}
  
  ## Installation
  <a name= "installation"></a>
  ${data.installationInstructions}
  
  ## Usage
  <a name= "usage"></a>
  ${data.usageInformation}
  
  ## Contribution Guidelines
  <a name= "contribution"></a>
  ${data.contributionGuidelines}
  
  ## Test Instructions
  <a name= "test"></a>
  ${data.testInstructions}
  
  ## Licence
  <a name= "license"></a>
  ${licenseSection}
 
  ## Questions
  <a name= "questions"></a>
  If you have any questions, feel free to reach out to me at ${emailLink}.
  ${githubLink}
  `;
}

module.exports = generateMarkdown;
