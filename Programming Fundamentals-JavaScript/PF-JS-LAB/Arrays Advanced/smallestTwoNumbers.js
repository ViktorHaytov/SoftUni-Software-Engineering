function smallestTwoNumbers (arr) {

    let sortedElements = arr.sort((a, b) => {
        return a - b;
    });

    let smollestElements = sortedElements.slice(0,2);

    console.log(smollestElements.join(" "));

}

smallestTwoNumbers ([3, 0, 10, 4, 7, 3]);