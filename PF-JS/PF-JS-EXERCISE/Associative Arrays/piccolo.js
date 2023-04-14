function piccolo (input) {

    let parking = new Set();

    for (let line of input) {
        let [command, carNum] = line.split(", ");

        switch (command) {
            case "IN":
                parking.add(carNum);
                break;
            case "OUT":
                parking.delete(carNum);
                break;  
        }
    }

    let sortedElements = Array.from(parking).sort();

    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
    }

    console.log(sortedElements.join("\n"));

}

piccolo (['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);