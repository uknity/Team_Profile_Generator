function generateManagerHTML(managerArray) {
  let managerHTML = "";

  for (mgr in managerArray) {
    const manager = managerArray[mgr];
    managerHTML += `
    <div class="col-sm col-md-3" style="color: white">
      <div class="card m-4">
          <div class="card-header bg-primary p-3">
            <h5 class="card-title p-2"><i class="fas fa-mug-hot mr-2"></i>${manager.getName()}</h5>
            <h6 class="card-subtitle mb-2 p-2">${manager.getRole()}</h6>
          </div>
          <div class="card-body bg-light p-4">
              <ul class="list-group list-group-flush bg-white m-4">
                  <li class="list-group-item my-2">Id: ${manager.getId()}</li>
                  <li class="list-group-item my-2">Email:  <a href="${manager.getEmail()}" target="_blank" rel="noopener noreferrer">${manager.getEmail()}</a></li>
                  <li class="list-group-item my-2">Office Number: ${manager.getOfficeNum()}</li>
              </ul>
          </div>
        </div>      
      </div>`;
  }

  return managerHTML;
}

function generateEngineerHTML(engineerArray) {
  let engineerHTML = "";

  for (engin in engineerArray) {
    const engineer = engineerArray[engin];
    engineerHTML +=  
  `<div class="col-sm col-md-3" style="color: white">
    <div class="card m-4">
        <div class="card-header bg-primary p-3">
            <h5 class="card-title p-2"><i class="fas fa-glasses mr-2"></i>${engineer.getName()}</h5>
            <h6 class="card-subtitle mb-2 p-2">${engineer.getRole()}</h6>
        </div>
        <div class="card-body bg-light p-4">
            <ul class="list-group list-group-flush bg-white m-4">
                <li class="list-group-item my-2">Id: ${engineer.getId()}</li>
                <li class="list-group-item my-2">Email: <a href="mailto:${engineer.getEmail()}"
                        target="_blank" rel="noopener noreferrer">${engineer.getEmail()}</a></li>
                <li class="list-group-item my-2">Github: <a href="${engineer.getGitHub()}"
                        target="_blank" class="card-link">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </div>
</div>`;
  }

  return engineerHTML;
}

function generateInternHTML(internArray) {
  let internHTML = "";

  for (int in internArray) {
    const intern = internArray[int];
    internHTML += 
  `<div class="col-sm col-md-3" style="color: white">
  <div class="card m-4">
      <div class="card-header bg-primary p-3">
          <h5 class="card-title p-2"><i class="fas fa-graduation-cap mr-2"></i>${intern.getName()}</h5>
          <h6 class="card-subtitle mb-2 p-2">${intern.getRole()}</h6>
      </div>
      <div class="card-body bg-light p-4">
          <ul class="list-group list-group-flush bg-white m-4">
              <li class="list-group-item my-2">Id: ${intern.getId()}</li>
              <li class="list-group-item my-2">Email: <a href="mailto:${intern.getEmail()}"
                      target="_blank" rel="noopener noreferrer">${intern.getEmail()}</a></li>
              <li class="list-group-item my-2">School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
</div>`;
  }

  return internHTML;
}

function pageContent(managerArray, engineerArray, internArray) {
  return `
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
      
      <main>
        <div class="container-fluid px-5">
            <div class="row justify-content-center" >
            ${generateManagerHTML(managerArray)}  
            ${generateEngineerHTML(engineerArray)}  
            ${generateInternHTML(internArray)}  
 
            
        </div>
      </main>
      <script src="https://kit.fontawesome.com/8b01529eae.js" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
      <script src="index.js"></script>
</body>
</html> `;
}

module.exports = pageContent;
