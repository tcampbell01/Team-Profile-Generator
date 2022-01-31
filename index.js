const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./src/page-template.js")
const path = require("path");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js")
const Employee = require("./lib/Employee")

const HTML = require("./dist/RenderedHTML.html")




const teamMembers = [];



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
    default: false
}
    ])
    .then(memberInfo => {
         let { name, email, id, officeNumber, school, gitHub, continueQuery } = memberInfo; 
         let member;
        if ((input) =>input.role==='Manager') {
            
          member = new Manager(name, id, email, officeNumber);
        teamMembers.push(member);
        console.log(member);
        
        } else if ((input) =>input.role==='Engineer') {
             member = new Engineer (name, id, email, gitHub);
            teamMembers.push(member);
            console.log(member);
            
        } else if ((input)=>input.role==="Intern") {
             member = new Intern(name, id, email, school)
            teamMembers.push(member);
            console.log(member);
           
        } if ((input) => input.continueQuery==='Y') {
            return userInputRole()
        } else if ((input) => input.continueQuery==='N') {
            return teamMembers;
            
            
        }
        
    } )
    

}
    
    


    
         


           




         



           








userInputRole();
















// // function to create html file

// function writeToFile(, data) {
//     fs.writeFile(`RenderedHTML.html`, data, function (err, result) {
//         if (err) console.log('error, err');
//     })
// }

// async function init() {
//     let answers = await userInput ();
//     writeToFile((answers.fileName), (generateHTML(answers)));
// }

// init();