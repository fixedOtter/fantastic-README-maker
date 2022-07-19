//
// made by fixedOtter on 17.7.2022
//

/* **** */
/* main */
/* **** */
const almostAMeal = {
  /* this is the main data chewer to get the userInput to README.md */
  dataChewer: (userData, licenseIndex) => {
    /* declarations */
    // file stuff declarations (directory is a NTH that I planned on implementing)
    let fileData, directory;
    // license stuff
    let licenseBadge, licenseLink;

    // this is the main big momma doing the actual figuring out of what license to associate depending on the index value of the licenseArray in index.js
    switch (licenseIndex) {
      case 0:
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        licenseLink = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 1:
        licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
        break;
      case 2:
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
        break;
      case 3:
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
        break;
      case 4:
        licenseBadge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
        licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/';
        break;
      case 5:
        licenseBadge = `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
        licenseLink = 'https://creativecommons.org/licenses/by/4.0/';
        break;
      case 6:
        licenseBadge = `[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)`;
        licenseLink = 'https://creativecommons.org/licenses/by-sa/4.0/';
        break;
      case 7:
        licenseBadge = `[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)`;
        licenseLink = 'https://creativecommons.org/licenses/by-nc/4.0/';
        break;
      case 8:
        licenseBadge = `[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)`;
        licenseLink = 'https://creativecommons.org/licenses/by-nd/4.0/';
        break;
      case 9:
        licenseBadge = `[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)`;
        licenseLink = 'https://creativecommons.org/licenses/by-nc-sa/4.0/';
        break;
      case 10:
        licenseBadge = `[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)`;
        licenseLink = 'https://creativecommons.org/licenses/by-nc-nd/4.0/';
        break;
      case 11:
        licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        licenseLink = 'https://opensource.org/licenses/EPL-1.0';
        break;
      case 12:
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
      case 13:
        licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
        licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
        break;
      case 14:
        licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
        licenseLink = 'https://www.gnu.org/licenses/agpl-3.0';
        break;
      case 15:
        licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
        licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0';
        break;
      case 16:
        licenseBadge = `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
        licenseLink = 'https://www.gnu.org/licenses/fdl-1.3';
        break;
      case 17:
        licenseBadge = `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`;
        licenseLink = 'https://firstdonoharm.dev';
        break;
      case 18:
        licenseBadge = `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)`;
        licenseLink = 'https://firstdonoharm.dev';
        break;
      case 19:
        licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        licenseLink = 'https://opensource.org/licenses/IPL-1.0';
        break;
      case 20:
        licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
        licenseLink = 'https://opensource.org/licenses/ISC';
        break;
      case 21:
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        licenseLink = 'https://opensource.org/licenses/MIT';
        break;
      case 22:
        licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        licenseLink = 'https://opensource.org/licenses/MPL-2.0';
        break;
      case 23:
        licenseBadge = `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`;
        licenseLink = 'https://opendatacommons.org/licenses/by/';
        break;
      case 24:
        licenseBadge = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
        licenseLink = 'https://opendatacommons.org/licenses/odbl/';
        break;
      case 25:
        licenseBadge = `[![License: PDbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
        licenseLink = 'https://opendatacommons.org/licenses/pddl/';
        break;
      case 26:
        licenseBadge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
        licenseLink = 'https://opensource.org/licenses/Artistic-2.0';
        break;
      case 27:
        licenseBadge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
        licenseLink = 'https://opensource.org/licenses/Artistic-2.0';
        break;
      case 28:
        licenseBadge = `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`;
        licenseLink = 'https://opensource.org/licenses/OFL-1.1';
        break;
      case 29:
        licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        licenseLink = 'http://unlicense.org/';
        break;
      case 30:
        licenseBadge = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
        licenseLink = 'http://www.wtfpl.net/about/';
        break;
      case 31:
        licenseBadge = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
        licenseLink = 'https://opensource.org/licenses/Zlib';
        break;
      default:
        licenseBadge = `https://img.shields.io/badge/unlicensed-unlicensed-critical`;
        licenseLink = 'https://choosealicense.com/';
        break;
    }

    // sexy mama
    /* I have to mess up the whitespace with this otherwise it will capture the indents in the readme */
    fileData = 
`# ${userData.projectTitle}
${licenseBadge}

## Project Description
${userData.projectDescription}

## Table of Contents
> * [License](#license)
> * [Installation](#installation)
> * [Project Usage](#usage)
> * [Contributors](#contributors)
> * [Testing the Project](#tests)

## License
This project was licened with ${userData.licenseChoice}. [Here's a link to license information](${licenseLink})

## Installation Instructions
When installing the project, make sure to run this command:
\`\`\`
${userData.installationInstructions}
\`\`\`

## Project Use
${userData.projectUsage}

## Contributors
Many thanks to ${userData.contributors}, who contributed to this project

## Tests
To test this project, please run the following:
\`\`\`
${userData.testCommand}
\`\`\`

## Questions?
Here's how you can contact me with any questions you may have!
* [Email](mailto:${userData.emailAddress})
* [GitHub (${userData.githubUsername})](https://github.com/${userData.githubUsername})
`;
    return fileData;
  }
}

export let inputToREADME = almostAMeal;