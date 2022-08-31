function arrayRotation (array, rotations) {

    while (rotations > 0) {
        let numberToMove = array.shift();
        array.push(numberToMove);

        rotations--;
    }

    console.log(array.join(" "));
}

arrayRotation ([51, 47, 32, 61, 21], 2);