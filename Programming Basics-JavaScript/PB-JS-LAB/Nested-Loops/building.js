function building (input) {

    let floor = Number(input[0]);
    let room = Number(input[1]);


    for (let a = floor; a >= 1; a--) {
        let buffer = "";
        for (let b = 0; b < room; b++) {
            
            if (a === floor) {
                buffer += "L" + a + b + " ";

            } else if (a % 2 === 0) {
                buffer += "O" + a + b + " ";

            } else {
                buffer += "A" + a + b + " ";
            }

        }

        console.log(buffer);

    }
     
}

building (["6","4"]);