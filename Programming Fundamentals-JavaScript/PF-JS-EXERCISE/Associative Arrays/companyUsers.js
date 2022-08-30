function companyUsers (input) {

    let result = {};

    for (let el of input) {
        let [company, employees] = el.split("->");

        if (!result.hasOwnProperty(company)) {
            result[company] = new Set();
        }

        let newValue = result[company];
        result[company] = newValue.add(employees);
        
    }

        let sortByName = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
   
    for (let [key, value] of sortByName) {
        let valueArr = Array.from(value);

         console.log(key );
         console.log(`--${valueArr.join("\n--")}`);
    
    }

   
}

companyUsers ([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);