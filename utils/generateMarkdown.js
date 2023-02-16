// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Testing](#testing)
  6. [Contact](#contact)
  7. [License](#license)
  ## Description
  ${data.description}
`;
}

module.exports = generateMarkdown;
