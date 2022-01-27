const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./src/page-template.js")
const path = require("path")

// create const var 1. dir name ()

const teamMembers = [];

function UserInput () {

    //function createManager() {
        //inquirer.prompt([])
    }

function userInputRole () {

    return inquirer.prompt([

    {

        type: 'list',
        name: 'role',
        message: 'Please choose your role in the company. (Required)',
        choices: [
            'Employee',
            'Manager',
            'Engineer',
            'Intern'
        ]
        
       

    }

    
])

.then((answer) => {
    console.log(answer.role);

    if (answer.role==='Employee') {

        function Employee () {
            return inquirer.prompt(arrayEmployee); 
        }
    }  else if (answer.role === 'Manager') {
        function Manager () {
            return inquirer.prompt(arrayManager);

        }
    } else if (answer.role ==='Engineer') {
        function Engineer () {
            return inquirer.prompt(arrayEngineer);
        }
    } else if (answer.role === 'Intern') {
        function Intern () {
            return inquirer.prompt(arrayIntern);
        }
    }

    Employee();
    Manager();
    Engineer();
    Intern();
} )

}

userInputRole();













UserInput();



    // return inquirer.prompt([


// var arrayEmployee = [

       

//             {
//             type: 'input',
//             name: 'name',
//             message: 'Please enter a name. (Required)',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter a name!");
//                     return false;
//                 }
//             }
            
//         },
        

//         {

//             type: 'input',
//             name: 'email',
//             message: 'Please enter an email. (Required)',
//             validate: emailInput => {
//                 if (emailInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter an email!");
//                     return false;
//                 }
//             }
//         },

//         {

//             type: 'input',
//             name: 'id',
//             message: 'Please enter an employee ID. (Required)',
//             validate: idInput => {
//                 if (idInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter your employee ID!");
//                     return false;
//                 }
//             }
//         },
// ]

//   var arrayManager = [
//     {

//         type: 'list',
//         name: 'role',
//         message: 'Please choose your role in the company. (Required)',
//         choices: [
//             'Employee',
//             'Manager',
//             'Engineer',
//             'Intern'
//         ]
        


//     },

//         {
//         type: 'input',
//         name: 'name',
//         message: 'Please enter a name. (Required)',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true;
//             } else {
//                 console.log("Please enter a name!");
//                 return false;
//             }
//         }
        
//     },
    

//     {

//         type: 'input',
//         name: 'email',
//         message: 'Please enter an email. (Required)',
//         validate: emailInput => {
//             if (emailInput) {
//                 return true;
//             } else {
//                 console.log("Please enter an email!");
//                 return false;
//             }
//         }
//     },

//     {

//         type: 'input',
//         name: 'id',
//         message: 'Please enter an employee ID. (Required)',
//         validate: idInput => {
//             if (idInput) {
//                 return true;
//             } else {
//                 console.log("Please enter your employee ID!");
//                 return false;
//             }
//         }

//     },

//             {

//                 type: 'input',
//                 name: 'office',
//                 message: 'What is your office number? (Required)',
//                 validate: officeInput => {
//                     if (officeInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter your office number!");
//                         return false;
//                     }
//                 }
//             }
    
//   ]      

//    // additional question for Manager 
      

    
// var arrayEngineer = [
//     {

//         type: 'list',
//         name: 'role',
//         message: 'Please choose your role in the company. (Required)',
//         choices: [
//             'Employee',
//             'Manager',
//             'Engineer',
//             'Intern'
//         ]
        


//     },

//         {
//         type: 'input',
//         name: 'name',
//         message: 'Please enter a name. (Required)',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true;
//             } else {
//                 console.log("Please enter a name!");
//                 return false;
//             }
//         }
        
//     },
    

//     {

//         type: 'input',
//         name: 'email',
//         message: 'Please enter an email. (Required)',
//         validate: emailInput => {
//             if (emailInput) {
//                 return true;
//             } else {
//                 console.log("Please enter an email!");
//                 return false;
//             }
//         }
//     },

//     {

//         type: 'input',
//         name: 'id',
//         message: 'Please enter an employee ID. (Required)',
//         validate: idInput => {
//             if (idInput) {
//                 return true;
//             } else {
//                 console.log("Please enter your employee ID!");
//                 return false;
//             }
//         }

//     },

//             {

//                 type: 'input',
//                 name: 'office',
//                 message: 'What is your office number? (Required)',
//                 validate: officeInput => {
//                     if (officeInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter your office number!");
//                         return false;
//                     }
//                 }
//             },

//             {

//                 type: 'input',
//                 name: 'github',
//                 message: 'Please enter your GitHub username. (Required)',
//                 validate: githubInput => {
//                     if (githubInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter your GitHub username!");
//                         return false;
//                     }
//                 }
//             },

// ]


// var arrayIntern = [
//     {

//         type: 'list',
//         name: 'role',
//         message: 'Please choose your role in the company. (Required)',
//         choices: [
//             'Employee',
//             'Manager',
//             'Engineer',
//             'Intern'
//         ]
        


//     },

//         {
//         type: 'input',
//         name: 'name',
//         message: 'Please enter a name. (Required)',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true;
//             } else {
//                 console.log("Please enter a name!");
//                 return false;
//             }
//         }
        
//     },
    

//     {

//         type: 'input',
//         name: 'email',
//         message: 'Please enter an email. (Required)',
//         validate: emailInput => {
//             if (emailInput) {
//                 return true;
//             } else {
//                 console.log("Please enter an email!");
//                 return false;
//             }
//         }
//     },

//     {

//         type: 'input',
//         name: 'id',
//         message: 'Please enter an employee ID. (Required)',
//         validate: idInput => {
//             if (idInput) {
//                 return true;
//             } else {
//                 console.log("Please enter your employee ID!");
//                 return false;
//             }
//         }
//     },

//             {

//                 type: 'input',
//                 name: 'office',
//                 message: 'What is your office number? (Required)',
//                 validate: officeInput => {
//                     if (officeInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter your office number!");
//                         return false;
//                     }
//                 }
//             },

//             {

//                 type: 'input',
//                 name: 'github',
//                 message: 'Please enter your GitHub username. (Required)',
//                 validate: githubInput => {
//                     if (githubInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter your GitHub username!");
//                         return false;
//                     }
//                 }
//             },

//             {
//                 type: 'input',
//                 name: 'school',
//                 message: 'Please enter the school you are currently attending. (Required)',
//                 validate: schoolInput => {
//                     if (schoolInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter the school you are currently attending!");
//                         return false;
//                     }
//                 }
//             },
        

// ]





      


     



// // function to create html file

// function writeToFile(filename, data) {
//     fs.writeFile(`RenderedHTML.html`, data, function (err, result) {
//         if (err) console.log('error, err');
//     })
// }

// async function init() {
//     let answers = await userInput ();
//     writeToFile((answers.fileName), (generateHTML(answers)));
// }

// init();