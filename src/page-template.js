// create Manager card
const generateTeam = team => {

    const generateManager = function (manager) {
        return `
    <div class="card employeeCard">
            <div class="card-header">
                <h3 class = "card-title"${manager.getName()}</h3>
                <i class="fa-regular fa-mug-hot"></i><h4>Manager</h4>
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

    // generateManager();

    const generateEngineer = function (engineer) {
        return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <i class="fa-regular fa-glasses"></i></i><h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="gitHub">GitHub: ${engineer.github}</p>
        </div>
    </div>
</div>
`;
    };

    // generateEngineer();

    const generateIntern = function (intern) {
        return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <i class="fa-solid fa-user-graduate"></i></i></i><h4>Intern</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>
`;
    };

    // generateIntern();

    const genHTML = [];

    genHTML.push(
        team.filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );

    genHTML.push(
        team.filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join("")
    );


    genHTML.push(
        team.filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join("")

    );
    return genHTML.join("");
}

// generateTeam();


        //HTML template goes here 

        module.exports =  team => {
            return `
            <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- CSS only -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="stylesheet.css">
            <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet">

            <title>My Team</title>
        </head>

    <body>

        <div class= "container-fluid">
            <div class = "row">
                <div class = "col-12 jumbotron mb-4 team-heading">
                    <h1 class ="text-center">My Team</h1>
                </div>
            </div>
            </div>

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



