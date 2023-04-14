function perfectNumber (num) {

    let perfectSum = 0;

    for (let i = 1; i < num; i++) {
        
        if (num % i === 0) {
            perfectSum += i;

        }
    }

   

   (perfectSum === num) ?  console.log("We have a perfect number!") : console.log("It's not so perfect.");

}

perfectNumber (28);