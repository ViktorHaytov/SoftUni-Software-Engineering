function sumNumbers (input) {

    let index = 0;
    let number = Number(input[index]);
    index++;
   

    let sum = 0;

    while (sum < number) {
        n = Number(input[index]);
        index++;
        

        sum += n;

        
    }

    console.log(sum);


}

sumNumbers (["100","10","20","30","40"]);