//
// made by fixedOtter on 17.7.2022
//

import { parsedLicense } from "./licenseParser.js";

/* **** */
/* main */
/* **** */
const decentSnack = {
  /* this is the main data chewer to get the userInput to README.md */
  dataChewer: ({projectTitle, projectDescription, githubUsername, installationInstructions, projectUsage, licenseChoice, contributors, testCommand, emailAddress, emojiBool}, licenseIndex) => {
    /* declarations */
    // the actual file data
    let fileData;
    // license stuff (moved to another js file because I was sick of looking at that switch)
    let [licenseBadge, licenseLink] = parsedLicense.licenseEater(licenseIndex);

    // attempting to add emojis
/*     let emojiList = [':bowtie:', ':memo:', ':bookmark_tabs:', ':scroll:', ':paperclip:', ':inbox_tray:', ':wrench:', ':couplekiss:', ':chart:', ':interrobang:', ':bell:', ':octocat:'];
    let emojiArray = [];

    // if emoji's are wanted, it will define them
    if (emojiBool) {
      emojiArray = emojiList.map(x => x)
    } else { // else it makes them all empty strings
      emojiArray.forEach((currEmoji) => {currEmoji = ''});
      // var [emoji0, emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9, emoji10, emoji11] = '';
    } 
    with ${emojiArray[i]} in fileData
    */

    // sexy mama
    /* I have to mess up the whitespace with this otherwise it will capture the indents in the readme */
    fileData = 
`# ${projectTitle}
${licenseBadge}

## Project Description
${projectDescription}

## Table of Contents
> * [License](#license)
> * [Installation](#installation)
> * [Project Usage](#usage)
> * [Contributors](#contributors)
> * [Testing the Project](#tests)

## License
This project was licened with ${licenseChoice}. [Here's a link  to license information](${licenseLink})

## Installation Instructions 
When installing the project, make sure to run this command:
\`\`\`
${installationInstructions}
\`\`\`

## Project Use 
${projectUsage}

## Contributors
Many thanks to ${contributors}, who contributed to this project

## Tests
To test this project, please run the following:
\`\`\`
${testCommand}
\`\`\`

## Questions?
Here's how you can contact me with any questions you may have!
* [Email](mailto:${emailAddress})
* [GitHub (${githubUsername})](https://github.com/${githubUsername})
`;
    return fileData;
  }
}

export let inputToREADME = decentSnack;