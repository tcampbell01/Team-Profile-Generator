const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML")

function userInputEmployee () {

    return inquirer.prompt([

        {

            type: 'list',
            name: 'role',
            message: 'Please choose your role in the company.',
            choices: [
                'Employee',
                'Manager',
                'Engineer',
                'Intern'
            ]
        },

        {
            type: 'input',
            name: 'name',
            message: 'Please enter a name. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
,

        },

        {

            type: 'input',
            name: 'email',
            message: 'Please enter an email. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email!");
                    return false;
                }
            }
        },

        {

            type: 'input',
            name: 'id',
            message: 'Please enter an employee ID. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                    return false;
                }
            }
        },

        {

            type: 'input',
            name: 'continue',
            message: 'Would you like to enter another employee? Please enter Y or N. (Required)',
            validate: continueInput => {
                if (continueInput===Y || continueInput===y) {
                    continue;
                    
                } else {
                    break;
                }
            }
        }

    ] )

}

  

function userInputManager () {

    return inquirer.prompt([

        // Additional questions for Manager

        {

            type: 'input',
            name: 'office',
            message: 'What is your office number? (Required)',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter your office number!");
                    return false;
                }
            }
        }

    ] )
}



function userInputEngineer () {

    return inquirer.prompt([


        // Additional question for Engineer
        {

            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        }
    ])
}

function userInputIntern () {

    return inquirer.prompt([
        // Additional question for Intern

        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school you are currently attending. (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("Please enter the school you are currently attending!");
                    return false;
                }
            }
        },
    ])
}

// function to create html file

function writeToFile (filename, data) {
    fs.writeFile(`RenderedHTML.html`, data, function(err, result) {
        if(err) console.log('error, err');
    })
}

async function init () {
    let answers = await userInputEmployee () || (userInputEmployee () && userInputManager ()) || (userInputEmployee () && userInputEngineer ()) || (userInputEmployee () && userInputIntern ());
    writeToFile((answers.fileName), (generateHTML(answers)));
}

init();