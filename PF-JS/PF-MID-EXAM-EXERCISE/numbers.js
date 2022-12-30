function numbers (input) {

    let numbersArr = input.split(" ").map(Number);
    let sum = 0;
    let avgElements = [];
    

    for (let el of numbersArr) {
        sum += el;
    }

    let avg = sum / numbersArr.length;

    for (let el of numbersArr) {
        if (el > avg) {
            avgElements.push(el)
        }
    }

    let result = avgElements.sort((a, b) => b - a).slice(0, 5);

    if (result.length > 0) {
        console.log(result.join(" "));

    } else {
        console.log("No");
    }

}

numbers ('1');