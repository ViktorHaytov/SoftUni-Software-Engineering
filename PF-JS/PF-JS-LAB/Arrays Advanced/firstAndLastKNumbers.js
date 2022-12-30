function firstAndLastKNumbers (arr) {

    let k = arr.shift();

    let firstKElements = arr.slice(0, k);
    let lastKElements = arr.slice(-k);

    console.log(firstKElements.join(" "));
    console.log(lastKElements.join(" "));

}

firstAndLastKNumbers ([2, 7, 8, 9]);