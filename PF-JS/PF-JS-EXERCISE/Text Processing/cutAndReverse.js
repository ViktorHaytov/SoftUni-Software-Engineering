function cutAndReverse (input) {

    let reversed = input.split("").reverse().join("");
    let firstWord = reversed.substring(0, reversed.length / 2);
    let secondWord = reversed.substring(reversed.length / 2);

    console.log(secondWord);
    console.log(firstWord);
     

}

cutAndReverse ('tluciffiDsIsihTgnizamAoSsIsihT');