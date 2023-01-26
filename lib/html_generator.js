function compileManagers(data) {
    let managerInfo=""
    data.forEach(employee => {
        if(employee.getRole() = 'Manager') {
        managerInfo += 
                `<div class="card text-bg-primary mb-2 col-4" style="max-width: 18rem;">
                    <div class="card-header">Manager</div>
                    <div class="card-body">
                        <h5 class="card-title">Name: ${employee.name}</h5>
                        <p class="card-text">ID: ${employee.id}</p>
                        <p class="card-text">Office Number: ${employee.officeNumber}</p>
                        <p class="card-text">E-mail: <a href="mailto:${employee.email}" class="card-link text-white">${employee.email}</a></p>
                    </div>
                    </div>
                </div>
                ` 
        }
    });
    return managerInfo
}

function compileEngineers(data) {
    let engineerInfo= ""
    data.forEach(employee => {
        if(employee.getRole() = 'Engineer') {
        engineerInfo += 
                `<div class="card text-bg-secondary mb-2 col-4" style="max-width: 18rem;">
                    <div class="card-header">Engineer</div>
                    <div class="card-body">
                        <h5 class="card-title">Name: ${employee.name}</h5>
                        <p class="card-text">ID: ${employee.id}</p>
                        <p class="card-text">GitHub: <a href="https://github.com/${employee.gitHub}" class="card-link text-black" target="_blank">${employee.gitHub}</a></p>
                        <p class="card-text">E-mail: <a href="mailto:${employee.email}" class="card-link text-black">${employee.email}</a></p>
                    </div>
                </div>
                `
        }
    });
    return engineerInfo
}

function compileInterns(data) {
    let internInfo=""
    data.forEach(employee => {
        if(employee.getRole() = 'Intern') {
        internInfo += 
                `<div class="card text-bg-success mb-2 col-4" style="max-width: 18rem;">
                    <div class="card-header">Intern</div>
                    <div class="card-body">
                        <h5 class="card-title">Name: ${employee.name}</h5>
                        <p class="card-text">ID: ${employee.id}</p>
                        <p class="card-text">School Name: ${employee.school}</p>
                        <p class="card-text">E-mail: <a href="mailto:${employee.email}" class="card-link text-black">${employee.email}</a></p>
                    </div>
                </div>
                ` 
        }
    });
    return internInfo
}


function compileHTML(data) {
    let managerInfo = compileManagers(data)
    let engineerInfo = compileEngineers(data)
    let InternInfo = compileInterns(data)

    return `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
                    <title>Team Profile</title>
                </head>
                <body>
                    <header class="text-white text-center">
                        <h1>My Team Profile</h1>
                    </header>
                    <main>
                        <section class="managerInfo d-flex row justify-content-evenly">
                            ${managerInfo}
                        </section>
                        <section class="engineerInfo d-flex row justify-content-evenly">
                            ${engineerInfo}
                        </section>
                        <section class="internInfo d-flex row justify-content-evenly">
                            ${InternInfo}
                        </section>
                    </main>
                </body>
            </html>`

}

module.exports = compileHTML