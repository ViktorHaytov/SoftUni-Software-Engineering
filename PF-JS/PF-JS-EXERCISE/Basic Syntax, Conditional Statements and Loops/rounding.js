function rounding (num1,num2) {

    if (num2 > 15) {
        num2 = 15;
    }

    let roundedNumber = num1.toFixed(num2);

    console.log(parseFloat(roundedNumber));
}

rounding (10.5,3);