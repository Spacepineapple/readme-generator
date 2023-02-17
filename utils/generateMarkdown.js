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
  ## Description <a id="description"></a>
  ${data.description}
  ## Installation <a id="installation"></a>
  ${data.installation}
  ## Usage <a id="usage"></a>
  ${data.usage}
  ## Contributing <a id="contributing"></a>
  ${data.contributing}
  ## Testing <a id="testing></a>
  ${data.testing}
  ## Contact <a id="contact"></a>
  ${data.email}
  ${data.username}
  ## License <a id="license></a>
  ${data.license}
`;
}

module.exports = generateMarkdown;
