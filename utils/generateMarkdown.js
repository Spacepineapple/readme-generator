// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = generateLicense(data.license);
  return `
  # ${data.title} ${licenseBadge}

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

  ## Testing <a id="testing"></a>
  ${data.testing}

  ## Contact <a id="contact"></a>
  The author can be found at https://www.github.com/${data.username} or contacted via email at ${data.email}.

  ## License <a id="license"></a>
  This software is made available under the terms of the ${data.license} license.
`;
}

function generateLicense(license) {
  switch (license) {
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Creative Commons Attribution 4.0":
      return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"
      break;
    case "Do What the F*ck You Want to Public License":
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      break;
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Open Software License 3.0":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
  }
}



module.exports = generateMarkdown;
