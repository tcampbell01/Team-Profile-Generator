const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./src/page-template.js")
const path = require("path");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js")
const Employee = require("./lib/Employee")

const HTML = require("./dist/RenderedHTML.html")
const util = require("util");
const outputDIR = path.resolve(__dirname, "output")
const outputPath = path.join(outputDIR, "RenderedHTML.html");



const teamMembers = [];

const genHTML = () => {

    const userInputRole = () => {
        return inquirer.prompt([

            //questions here

            {

                type: 'list',
                name: 'role',
                message: 'Which type of employee would you like to enter? . (Required)',
                choices: [
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
                        console.log("Please enter an employee ID!");
                        return false;
                    }
                }
            },

            {

                type: 'input',
                name: 'officeNumber',
                when: (input) => input.role === 'Manager',
                message: 'Please enter an office number. (Required)',
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log("Please enter an office number!");
                        return false;
                    }
                }
            },
            {

                type: 'input',
                name: 'gitHub',
                when: (input) => input.role === "Engineer",
                message: 'Please enter a GitHub username. (Required)',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter a GitHub username!");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'school',
                when: (input) => input.role === "Intern",
                message: 'Please enter the school the Intern is currently attending. (Required)',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the school the intern is currently attending!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'continueQuery',
                message: 'Would you like to add another employee? Enter Y or N (Required)',
            },
        ])

            .then(Employee => {
                let { name, email, id, role, officeNumber, school, gitHub, continueQuery } = Employee;
                let member;


                if (role === 'Manager') {

                    member = new Manager(name, id, email, officeNumber);

                    teamMembers.push(member);
                    console.log(teamMembers);

                } else if (role === 'Engineer') {
                    member = new Engineer(name, id, email, gitHub);

                    teamMembers.push(member);
                    console.log(teamMembers);

                } else if (role === "Intern") {
                    member = new Intern(name, id, email, school)

                    teamMembers.push(member);

                    console.log(teamMembers);
                }



                if (continueQuery === 'Y') {
                    return userInputRole()
                } else if (continueQuery === 'N') {
                    return teamMembers;

                }

            })
        

    }


    const htmlBuilder = () => {
        

        fs.writeFileSync("./dist/RenderedHTML.html", generateTeam(teamMembers), "UTF-8")

    };

   htmlBuilder();


    userInputRole();

}


genHTML();


































// function to create html file


// function writeToFile(filename, data) {
//     fs.writeFile(filename, data, (err) => {
//         if(err) throw err;
//         console.log('file saved')
//     });
// }



// async function create() {
//     let memberInfo = await userInputRole ();
//     writeToFile((memberInfo.fileName), (userInputRole(memberInfo)));
// }

// create();

