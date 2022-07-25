//
// made by fixedOtter on 17.7.2022
//

/* ***************** */
/* imported goods ;) */
/* ***************** */
import { inputToREADME } from './utils/userInputToREADME.js';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

/* ************ */
/* declarations */
/* ************ */
const licenseArray = ['Apache 2.0','Boost 1.0','BSD 3-Clause','BSD 2-Clause','CC0','Attribution 4.0','Attribution-ShareAlike 4.0','Attribution-NonCommercial 4.0','Attribution-NoDerivates 4.0','Attribution-NonCommmercial-ShareAlike 4.0','Attribution-NonCommercial-NoDerivatives 4.0','Eclipse 1.0','GPL v3','GPL v2','AGPL v3','LGPL v3','FDL v1.3','Hippocratic 2.1','Hippocratic 3.0','IBM Public 1.0','ISC License (ISC)','The MIT License','Mozilla Public 2.0','Attribution License (BY)','Open Database License (ODbL)','Public Domain Dedication and License (PDDL)','Perl License','Artistic 2.0','SIL Open Font License 1.1','The Unlicense','The Do What the Fuck You Want to Public License','The zlib/libpng License'];
let savedDirectory = '';

/* ****************************** */
/* this is the array of questions */
/* ****************************** */
const questions = [
  {
    name: 'projectTitle',
    message: 'What is the title of your project?',
  },
  {
    name: 'projectDescription',
    message: `Please provide a short description of your project`
  },
  {
    name: 'githubUsername',
    message: `What's your GitHub username?`,
    default: `fixedOtter`
  },
  {
    name: 'installationInstructions',
    message: `What command should a user run after downloading?`,
    default: `node i`
  },
  {
    name: 'projectUsage',
    message: `What is the intended use case for this project?`
  },
  {
    type: 'list',
    name: 'licenseChoice',
    message: `What license do you want to use?`,
    choices: licenseArray,
    default: 'GPL v3'
  },
  {
    name: 'contributors',
    message: `Who else helped / contributed to this project?`
  },
  {
    name: 'testCommand',
    message: `What would a user run to test the project?`,
    default: `npm test`
  },
  {
    name: 'emailAddress',
    message: `What's your email address?`,
    default: `fo1152rc@go.minnstate.edu`
  },
  {
    type: 'confirm',
    name: 'screenshotBool',
    message: `Do you want to include a screenshot section?`,
    default: 'Y'
  },
/*   {
    type: 'confirm',
    name: 'emojiBool',
    message: `Do you want to include emojis?`,
    default: 'Y',
  }, */
  {
    name: 'fileName',
    message: `What do you want to name the file?`,
    default: `README`
  },
  {
    type: 'confirm',
    name: 'dirBool',
    message: `Do you want to save this file to another directory?`,
  },
  {
    type: 'list',
    name: 'workingDir',
    message: `Please pick from your list of favorites:`,
    choices: ['homeworkProjects','Desktop', 'nodeJS'],
    default: 'homeworkProjects',
    when(answers) {
      return answers.dirBool;
    }
  },
  {
    name: 'folderName',
    message: 'What folder name would you like it in?',
    when(answers) {
      return answers.workingDir;
    }
  },
  // NTH: get screenshot??
];


/* ***************************************** */
/* this is the function to write to the file */
/* ***************************************** */
function writeFile(fileName, data) {
  // NTH: add some filename validation so we don't overwrite anything?

  // NTH: add cli spinner for like three seconds saying it's making the file B)

  // actually the part writing to the file
  fs.writeFile(fileName, data, (err) => 
    // if an error occurs, it will be rendered to console - if not, it will log that the README has been generated
    err ? console.error(err) : console.log('README has been generated! :)')
  );
}

/* ************************************************************* */
/* starts inquirer for userInput and passes to create the readme */
/* ************************************************************* */
const inquirerFunct = () => {
  // first prompting the user with the questions array
  inquirer.prompt(questions)
  // then doing stuff with the data
  .then((answers) => {
    // declaring variables from the answers
    let licenseIndex = licenseArray.indexOf(answers.licenseChoice);
    let fileName = `${answers.fileName}.md`;
    // passing to the dataChewer to process the userInput and make a markdownData string
    let markdownData = inputToREADME.dataChewer(answers, licenseIndex);

    // this is probably a chunky way to do it
    if (answers.dirBool) {
      // writeFile to certain place boii
      switch (answers.workingDir) {
        case 'homeworkProjects':
          savedDirectory = '/home/gungun/Documents/learning/gitLab';
          break;
        case 'Desktop':
          savedDirectory = '/home/gungun/Desktop';
          break;
        case 'nodeJS':
          savedDirectory = '/home/gungun/Documents/learning/nodeJS';
          break;
        default:
          savedDirectory = '/home/gungun/Desktop';
          break;
      }
      // actually do the filesaving
      fs.writeFileSync(path.join(savedDirectory,answers.folderName,fileName), markdownData);
    } else {
      // just writeFile normally
      // writing to our user defined filename with user defined markdownData
      writeFile(fileName, markdownData);
    }
  })
  // this is catching any errors that occur
  .catch((error) => {
    if (error.isTtyError) {
      // issue with rendering the prompt in current environment (thanks manpages)
      console.error(`ERROR! The question prompt couldn't be rendered! ERROR: ${error}`);
    } else {
      // catchall because I'm not making elaborate error logic lol
      console.error(`ERROR! ${error}`);
    }
  });
}

/* ************************* */
/* this starts the main func */
/* ************************* */
inquirerFunct();