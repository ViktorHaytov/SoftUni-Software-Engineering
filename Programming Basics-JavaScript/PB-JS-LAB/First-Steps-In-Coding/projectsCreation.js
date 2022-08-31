function projectsCreation(input){

    let name = input[0];
    let projects = Number(input[1]);

    let totalHours = projects * 3;

    console.log(`The architect ${name} will need ${totalHours} hours to complete ${projects} project/s.`);
}

projectsCreation(["Viktor", "4"]);