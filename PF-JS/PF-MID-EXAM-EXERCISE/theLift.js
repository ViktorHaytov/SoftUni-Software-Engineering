function theLift (input) {

    let people = Number(input.shift());
    let wagons = input.shift().split(" ").map(Number);
    let wagonsL = wagons.length;

    for (let i = 0; i < wagonsL; i++) {

        while (wagons[i] !== 4 && people !== 0) {
            wagons[i]++;
            people--;

        }

        
    }

    let isFull = wagons.filter(w => w !== 4);

    if (people === 0 && isFull.length !== 0) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(" "));

    } else if (people > 0 && isFull.length === 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(" "));

    } else if (people === 0 && isFull.length === 0) {
        console.log(wagons.join(" "));

    }
       
}

theLift (["15", "0 0 0 0 0"]);