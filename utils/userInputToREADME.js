//
// made by fixedOtter on 17.7.2022
//

/* **** */
/* main */
/* **** */

const dungPointOh = {
  // this is the main data chewer to get the userInput to README.md
  dataChewer: (userData) => {
    /* declarations */
    // file stuff declarations
    let fileData, directory;
    // license stuff
    let licenseBadge, licenseData;

    // use switch my homie
    switch (licenseArray.indexOf(fileData.licenseChoice)) {
      case 0:
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case 1:
        licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        break;
      case 2:
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        break;
      case 3:
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        break;
      case 4:
        licenseBadge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
        break;
      case 5:
        licenseBadge = `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
        break;
      case 6:
        licenseBadge = `[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)`;
        break;
      case 7:
        licenseBadge = `[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)`;
        break;
      case 8:
        licenseBadge = `[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)`;
        break;
      case 9:
        licenseBadge = `[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)`;
        break;
      case 10:
        licenseBadge = `[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)`;
        break;
      case 11:
        licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        break;
      case 12:
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case 13:
        licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
        break;
      case 14:
        licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
        break;
      case 15:
        licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
        break;
      case 16:
        licenseBadge = `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
        break;
      case 17:
        licenseBadge = `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`;
        break;
      case 18:
        licenseBadge = `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)`;
        break;
      case 19:
        licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        break;
      case 20:
        licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
        break;

      default:
        break;
    }

    fileData = `
    # ${userData.projectTitle}
    ${userData.projectDescription}

    ## Installation Instructions
    ${userData.installationInstructions}

    ## Project Uses
    ${userData.projectUsage}

    ## TESTING


    `;

    console.log(`dataChewer called and fileData = ${fileData}`);

    return fileData;
  }
  
}

/* lol this is getting the index */
const licenseArrayIndexFunc = (licenseChoice) => {return licenseArray.indexOf(licenseChoice)};

export let inputToREADME = dungPointOh;