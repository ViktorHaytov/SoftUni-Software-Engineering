function cinema (input) {

    let projectionType = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let sum = r * c;
    let result = 0;

    if (projectionType === "Premiere") {
        result = sum * 12.00;

    }else if (projectionType === "Normal") {
        result = sum * 7.50;

    }else if (projectionType === "Discount") {
        result = sum * 5.00;

    }

    console.log(`${result.toFixed(2)} leva`);
}

cinema (["Premiere", "10", "12"]);