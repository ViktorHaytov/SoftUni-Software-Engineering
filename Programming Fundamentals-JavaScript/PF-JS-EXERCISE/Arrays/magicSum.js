function magicSum (array, num) {

    let arrayL = array.length;

    for (let a = 0; a < arrayL; a++) {
        for (let b = a + 1; b < arrayL; b++) {
            let currentSum = array[a] + array[b];

            if (currentSum === num) {
                console.log(`${array[a]} ${array[b]}`);
            }
        }

    }

}

magicSum ([1, 7, 6, 2, 19, 23],8);