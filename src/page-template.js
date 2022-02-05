// create Manager card
const generateTeam = team => {

    const generateManager = function (manager) {
        return `
    <div class="col-4 mt-4">
            <div class="card-header1">
                <h2>${manager.getName()}</h2>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
            <ul class = "list-group">
                <li class="id">ID: ${manager.getId()}</li>
                <li class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="office">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
        </div>
    </div>
    `;
    };

   

    const generateEngineer = function (engineer) {
        return `
    <div class="col-4 mt-4">
    <div class="card-header2">
            <h2>${engineer.getName()}</h2>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
        <ul class = "list-group">
            <li class="id">ID: ${engineer.getId()}</li>
            <li class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="gitHub">GitHub: ${engineer.getGitHub()}</li>
        </ul>
    </div>
</div>
`;
    };



    const generateIntern = function (intern) {
        return `
    <div class="col-4 mt-4">
    <div class="card-header3">
            <h2>${intern.getName()}</h2>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
        <ul class = "list-group">
            <li class="id">ID: ${intern.getId()}</li>
            <li class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="school">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
`;
    };

   

    const HTML = [];

    HTML.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );

    HTML.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join("")
    );


    HTML.push(
        team.filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join("")

    );
    return HTML.join("");
}




        //HTML template goes here 

        module.exports =  team => {
            return `
            <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
         
          
            <link rel="stylesheet" href="../assets/stylesheet.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
           
           
        </head>

        <header>
        <div> <h1 class ="text-center">My Team</h1>
        </div>


        
    <body>

   

       

            <div class= "container">
            <div class = "row">
                <div class = "col-12 team-area d-flex justify-content-center">
               
                     ${generateTeam(team)}
                </div>
            </div>
        </div>






     
     </body>

    </html>  
            `;
        

};



