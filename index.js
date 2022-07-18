//
// made by fixedOtter on 17.7.2022
//

/* ***************** */
/* imported goods ;) */
/* ***************** */
import { inputToREADME } from './utils/userInputToREADME.js';
import inquirer from 'inquirer';
import fs from 'fs';

/* ************ */
/* declarations */
/* ************ */
const licenseArray = ['Apache 2.0','Boost 1.0','BSD 3-Clause','BSD 2-Clause','CC0','Attribution 4.0','Attribution-ShareAlike 4.0','Attribution-NonCommercial 4.0','Attribution-NoDerivates 4.0','Attribution-NonCommmercial-ShareAlike 4.0','Attribution-NonCommercial-NoDerivatives 4.0','Eclipse 1.0','GPL v3','GPL v2','AGPL v3','LGPL v3','FDL v1.3','Hippocratic 2.1','Hippocratic 3.0','IBM Public 1.0','ISC License (ISC)','The MIT License','Mozilla Public 2.0','Attribution License (BY)','Open Database License (ODbL)','Public Domain Dedication and License (PDDL)','Perl License','Artistic 2.0','SIL Open Font License 1.1','The Unlicense','The Do What the Fuck You Want to Public License','The zlib/libpng License'];

/* ****************************** */
/* this is the array of questions */
/* ****************************** */
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: `What's a short description of your project?`
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: `How would a user install your project?`
  },
  {
    type: 'input',
    name: 'projectUsage',
    message: `What would this project be used for?`
  },
  {
    type: 'list',
    name: 'licenseChoice',
    message: `What license do you want to use?`,
    choices: licenseArray,
  },
  {
    type: 'input',
    name: 'contributors',
    message: `Who else helped / contributed to this project?`
  },
  {
    type: 'input',
    name: 'testCommand',
    message: `What would a user run to test the project?`
  },
  {
    type: 'input',
    name: 'contactInfo',
    message: `How could a user contact you if they had questions?`
  },

];



/* this is the function to write to the file */
function writeFile(fileName, data) {
  console.log(`writeFile called and fileName = ${fileName} and data = ${data}`);

  fs.writeFile(fileName, data, (err) => 
    // TODO: Describe how this ternary operator works
  
    // add a cli spinner before complete right?
    err ? console.error(err) : console.log('README has been generated! :)')
  );
}

/* why does this */
function init() {
  inquirerFunct();
}

/* essentially main.js since  */
const inquirerFunct = () => {
  inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers);
    console.log(licenseArrayIndexFunc(answers.licenseChoice));
    let fileName = 'testme.md';
    let markdownData = inputToREADME.dataChewer(answers);
    writeFile(fileName, markdownData);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
  
/* does this make sense to do? i don't like it */
init();