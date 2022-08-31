function employees (input) {

    let employeesList = {};

    for (let person of input) {
        
        employeesList.name = person;
        employeesList.number = person.length;
        console.log(`Name: ${employeesList.name} -- Personal Number: ${employeesList.number}`);
        
    }
}

employees ([
    'Silas Butler',   
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);