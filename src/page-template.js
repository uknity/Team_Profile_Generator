const managerHTML = require('../lib/manager');
const engineerHTML = require('../lib/engineer');
const internHTML = require('../lib/intern');

console.log(managerHTML);

// generate the HTML pages
// const generateTeam = team => {
    
// const html = [];
//     html.push(team
//         .filter(employee => employee.getRole() === "Manager")
//         .map(manager => generateManager(manager))
//     );
//     return html.join("");
// }

// We are exporting out an anonymous function
function pageContent()  
{return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <nav class="navbar navbar-dark mb-5" style="background-color: #db5358">
        <div class="container-fluid d-flex justify-content-center">
          <h1 class="display-1" style="color: white">My Team</h1>
        </div>
      </nav>
      <!-- style="margin-left: 11rem; margin-right: 11rem;" -->
      <main>
        <div class="container-fluid">
            <div class="row justify-content-center" >
            ${managerHTML}
            ${engineerHTML}
            ${internHTML}   
            
        </div>


      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
      <script src="index.js"></script>
</body>
</html> `};

module.exports = pageContent();