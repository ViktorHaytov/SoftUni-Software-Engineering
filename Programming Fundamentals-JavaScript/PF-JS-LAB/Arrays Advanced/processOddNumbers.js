function processOddNumbers (arr) {

    let oddPositionElements = arr.filter((el, i) => i % 2 === 1);
    
    let multiplyElements = oddPositionElements.map(x => x * 2);
    let reversedElements = multiplyElements.reverse();

    console.log(reversedElements.join(" "));
    
}

processOddNumbers ([10, 15, 20, 25]);