const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js")


// const HTML = require("./dist/RenderedHTML.html")
// const util = require("util");
const output__DIR = path.resolve(__dirname, "output")
const outputPath = path.join(output__DIR, "RenderedHTML.html");
const generateTeam = require("./src/page-template")



const teamMembers = [];

const genHTML = () => {

    function userInput () {

        return inquirer.prompt([

            //questions here

            {

                type: 'list',
                name: 'role',
                message: 'Which type of employee would you like to enter? . (Required)',
                choices: [
                    'Manager',
                    'Engineer',
                    'Intern',
                    'I do not want to enter any more employees'
                ]


            }]).then(function (userInput) {
              switch(userInput.role) {
                case "Manager":
                  managerInput();
                  break;
                case "Engineer":
                  engineerInput();
                  break;
                case "Intern":
                  internInput();
                  break;
        
                default:
                  createHTML();
              }
            })
            }

            function managerInput () {
                inquirer.prompt ([

                
            
            {
                type: 'input',
                name: 'managerName',
                message: 'Please enter a name for the manager. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter a name!");
                        return false;
                    }
                }

            },


            {

                type: 'input',
                name: 'managerEmail',
                message: 'Please enter an email for the manager. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an email!");
                        return false;
                    }
                }
            },

            {

                type: 'input',
                name: 'managerId',
                message: 'Please enter an employee ID for the manager. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an employee ID!");
                        return false;
                    }
                }
            },

            {

                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Please enter an office number for the manager. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an office number!");
                        return false;
                    }
                }
            },

            
                  
        
             

        

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        console.log(manager); 
        console.log(teamMembers);
        inquiryPrompt();                  
    })
    
}
    
        function inquiryPrompt() {    
        return inquirer.prompt ([
        {
        type:'list',
        name: 'continue',
        message: 'Would you like to enter another employee?',
        choices: [
            'Yes',
            'No',
        ]
        }
    ]).then(function(inquiryPrompt) {
        switch(inquiryPrompt.continue) {
            case "Yes":
                userInput();
               break;
            case "No":
                createHTML();
               break;
            default:
                createHTML();
        }
    })
        
  
    };
     
        

      
      
    
    

        function engineerInput () {
           return inquirer.prompt ([

                {

                type: 'input',
                name: 'engineerName',
                message: 'Please enter a name for the engineer. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter a name!");
                        return false;
                    }
                }

            },


            {

                type: 'input',
                name: 'engineerEmail',
                message: 'Please enter an email for the engineer. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an email!");
                        return false;
                    }
                }
            },

            {

                type: 'input',
                name: 'engineerId',
                message: 'Please enter an employee ID for the engineer. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an employee ID!");
                        return false;
                    }
                }
            },

            {

                type: 'input',
                name: 'engineerGitHub',
                message: 'Please enter a GitHub username for the engineer. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter a GitHub username!");
                        return false;
                    }
                }
            }

        ])
        
        .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
                teamMembers.push(engineer);
                console.log(engineer);
                console.log(teamMembers);
                inquiryPrompt();
              });
            
        }

            function internInput () {
              return  inquirer.prompt ([
            {

                type: 'input',
                name: 'internName',
                message: 'Please enter a name for the intern. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter a name!");
                        return false;
                    }
                }

            },


            {

                type: 'input',
                name: 'internEmail',
                message: 'Please enter an email for the intern. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an email!");
                        return false;
                    }
                }
            },

            {

                type: 'input',
                name: 'internId',
                message: 'Please enter an employee ID for the intern. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter an employee ID!");
                        return false;
                    }
                }
            },

                {
                type: 'input',
                name: 'internSchool',
                message: 'Please enter the school the Intern is currently attending. (Required)',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter the school the intern is currently attending!");
                        return false;
                    }
                }
            },

    //         {

  
           
        ]) .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            console.log(intern);
            console.log(teamMembers);
            inquiryPrompt();
              });
          }
        

   

        
    

  
                

            
        

    

    function createHTML () {
        console.log("Your team has been created!")
    
        fs.writeFileSync(outputPath, generateTeam(teamMembers), "utf-8")
    
    }

   
    
    userInput();
    
}
    
    genHTML();





   

































