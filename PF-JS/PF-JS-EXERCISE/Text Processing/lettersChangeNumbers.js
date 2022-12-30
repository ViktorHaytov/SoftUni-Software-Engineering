function lettersChangeNumbers(input) {

    let secuences = input.split(" ");
    let validSeuence = secuences.filter(x => x.length > 1)
    let alphabetPosi = "abcdefghijklmnopqrstuvwxyz";
    let sum = 0;

    for (let el of validSeuence) {
        
        let token = el.split("");
        let firstLetter = token.shift();
        let lastLetter = token.pop();
        let number = Number(token.join(""));

        if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
            let position = alphabetPosi.indexOf(firstLetter.toLowerCase()) + 1;
            number = number / position;

        } else if (firstLetter.charCodeAt() >= 97 && firstLetter.charCodeAt() <= 122) {
            let position = alphabetPosi.indexOf(firstLetter.toLowerCase()) + 1;
            number = number * position;
            

        }

        if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
            let position = alphabetPosi.indexOf(lastLetter.toLowerCase()) + 1;
            number = number - position;
            

        } else if (lastLetter.charCodeAt() >= 97 && lastLetter.charCodeAt() <= 122) {
            let position = alphabetPosi.indexOf(lastLetter.toLowerCase()) + 1;
            number = number += position;
            

        }

        sum += number;

    }

    console.log(sum.toFixed(2));

}

lettersChangeNumbers('P34562Z q2576f  H456z');