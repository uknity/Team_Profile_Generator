// generate the HTML pages
const generateTeam = team => {
    const generateManager = manager = {
        return `${manager.getName()} etc etc`

    }
     // A method for a template to render manager info

    // A method for a template to render engineer info

    // A method for a template to render intern info

const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    return html.join("");
}

// We are exporting out an anonymous function
module.exports = team => {
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
      <!-- style="margin-left: 11rem; margin-right: 11rem;" -->
      <main>
        <div class="container-fluid">
            <div class="row justify-content-center" >
            ${someFunction(team)}    
            <!-- manager -->
                <div class="col-sm col-md-3" style="color: white">
                    <div class="card">
                        <div class="card-header bg-primary p-3">
                          <h5 class="card-title p-2"><img src="assets\images\coffee-icon-png-3.png" width="30" height="30" alt="coffee icon" class="align-text-bottom">  Manager</h5>
                          <h6 class="card-subtitle mb-2 p-2">position</h6>
                        </div>
                        <div class="card-body bg-light p-4">
                            <ul class="list-group list-group-flush bg-white m-4">
                                <li class="list-group-item my-2">Id: </li>
                                <li class="list-group-item my-2">Email:  <a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer">email</a></li>
                                <li class="list-group-item my-2">Office Number: </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Engineer Card -->
                <div class="col-sm col-md-3" style="color: white">
                    <div class="card">
                        <div class="card-header bg-primary p-3">
                          <h5 class="card-title p-2"><img src="assets/images/glasses3.png" width="30" height="30" alt="glasses icon" class="align-text-bottom">  Engineer</h5>
                          <h6 class="card-subtitle mb-2 p-2">position</h6>
                        </div>
                        <div class="card-body bg-light p-4">
                            <ul class="list-group list-group-flush bg-white m-4">
                                <li class="list-group-item my-2">Id: </li>
                                <li class="list-group-item my-2">Email:  <a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer">email</a></li>
                                <li class="list-group-item my-2"><a href="#" class="card-link">GitHub Profile</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- intern card  -->
                <div class="col-sm col-md-3" style="color: white">
                    <div class="card">
                        <div class="card-header bg-primary p-3">
                          <h5 class="card-title p-2"><img src="assets/images/gradcapfin.png" width="30" height="30" alt="glasses icon" class="align-text-bottom">  intern</h5>
                          <h6 class="card-subtitle mb-2 p-2">position</h6>
                        </div>
                        <div class="card-body bg-light p-4">
                            <ul class="list-group list-group-flush bg-white m-4">
                                <li class="list-group-item my-2">Id: </li>
                                <li class="list-group-item my-2">Email:  <a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer">email</a></li>
                                <li class="list-group-item my-2">School:  </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-sm col-md-3" style="color: white">
                    <div class="card">
                        <div class="card-header bg-primary p-3">
                          <h5 class="card-title p-2"><img src="assets/images/gradcapfin.png" width="30" height="30" alt="glasses icon" class="align-text-bottom">  intern</h5>
                          <h6 class="card-subtitle mb-2 p-2">position</h6>
                        </div>
                        <div class="card-body bg-light p-4">
                            <ul class="list-group list-group-flush bg-white m-4">
                                <li class="list-group-item my-2">Id: </li>
                                <li class="list-group-item my-2">Email:  <a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer">email</a></li>
                                <li class="list-group-item my-2">School:  </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm col-md-3" style="color: white">
                <div class="card">
                    <div class="card-header bg-primary p-3">
                      <h5 class="card-title p-2"><img src="assets/images/gradcapfin.png" width="30" height="30" alt="glasses icon" class="align-text-bottom">  intern</h5>
                      <h6 class="card-subtitle mb-2 p-2">position</h6>
                    </div>
                    <div class="card-body bg-light p-4">
                        <ul class="list-group list-group-flush bg-white m-4">
                            <li class="list-group-item my-2">Id: </li>
                            <li class="list-group-item my-2">Email:  <a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer">email</a></li>
                            <li class="list-group-item my-2">School:  </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- <div class="row justify-content-center">
                <div class="col-sm col-md-3 bg-primary m-2">
                  One of 2 columns
                </div>
                <div class="col-sm col-md-3 bg-light m-2">
                  One of 2 columns
                </div>
                
            </div> -->
        </div>


      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
      <script src="index.js"></script>
</body>
</html>
    `
}

module.exports = team => {
    HTML TEMPLATE
        WHERE YOU WANT TO SHOW THE USER CONTENT
      <div>
        ${generateTeam(team)}
      </div>
  }
  
  