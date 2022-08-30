function arrayManipulations (inputArr) {

    let numbersArr = inputArr.shift().split(" ").map(Number);

    for (let i = 0; i < inputArr.length; i++) {
        let arrElement = inputArr[i].split(" ");

        for (let j = 0; j < arrElement.length; j++) {
            let command = arrElement[j];
            let num = Number(arrElement[j + 1]);
            let index = Number(arrElement[j + 2])

            switch (command) {
                case "Add":
                    numbersArr.push(num);
                    break;
                case "Remove":
                    if (numbersArr.includes(num)) {
                        numbersArr = numbersArr.filter(x => x !== num);
                        }
                    break;
                case "RemoveAt":
                    numbersArr.splice(num,1);
                    break;
                case "Insert":
                    numbersArr.splice(index, 0, num);  
                    break;  
            }
        }
    }   
    
    console.log(numbersArr.join(" "));

}

arrayManipulations (['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);