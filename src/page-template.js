
function generateManagerHTML(managerArray){

  let managerHTML = "";

  for (mgr in managerArray) {
    const manager = managerArray[mgr];
    managerHTML += `  <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: 53</li>
        </ul>
    </div>
</div>`
  }

  return managerHTML
}

function generateEngineerHTML(engineerArray){

  let engineerHTML = "";

  for (engin in engineerArray) {
    const engineer = engineerArray[engin];
    engineerHTML += `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub Profile: <a href="${engineer.getGitHub()}" target="_blank" class="card-link">${engineer.getGitHub()}</a></li>
        </ul>
    </div>
</div>`
  }

  return engineerHTML
}

function generateInternHTML(internArray){

  let internHTML = "";

  for (int in internArray) {
    const intern = internArray[int];
    internHTML += `  <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>`
  }

  return internHTML
}

const cards = function (managerArray, engineerArray, internArray) {
  return `${generateManagerHTML(managerArray)}  
  ${generateEngineerHTML(engineerArray)}  
  ${generateInternHTML(internArray)}`
}

function pageContent(cards)  
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
            ${cards()}
 
            
        </div>


      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
      <script src="index.js"></script>
</body>
</html> `};

module.exports = pageContent;