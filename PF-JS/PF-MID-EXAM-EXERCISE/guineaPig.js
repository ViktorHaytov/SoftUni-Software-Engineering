function guineaPig (input) {

    let foodInGrams = Number(input.shift()) * 1000;
    let hayInGrams =  Number(input.shift()) * 1000;
    let coverInGrams =  Number(input.shift()) * 1000;
    let weightInGrams =  Number(input.shift()) * 1000;

    let isEnough = true;

    for (let i = 1; i <= 30; i++) {
        let runsToTheStore = (foodInGrams <= 0) || (hayInGrams <= 0) || (coverInGrams <= 0);

        if (runsToTheStore && i < 30) {
            isEnough = false;
            console.log("Merry must go to the pet store!");
            break;

        } else {
            foodInGrams -= 300;

            if (i % 2 === 0) {
                let hayNeeded = foodInGrams * 0.05;
                hayInGrams -= hayNeeded;
            } 
            if (i % 3 === 0) {
                let coverNeeded = weightInGrams / 3;
                coverInGrams -= coverNeeded;   
        }
        
    }
}  

    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    }

}

guineaPig (["10", 
"5", 
"5.2", 
"1"]);