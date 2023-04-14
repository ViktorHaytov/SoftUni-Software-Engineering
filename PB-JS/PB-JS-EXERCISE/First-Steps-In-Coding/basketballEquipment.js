function basketballEquipment (input) {

    let annualFee = Number(input[0]);

    let shoes = annualFee - (annualFee * 0.40);
    let tracksuit = shoes - (shoes * 0.20);
    let ball = tracksuit / 4;
    let accessory = ball / 5;

    let totalSum = annualFee + shoes + tracksuit + ball + accessory;

    console.log(totalSum);
}

basketballEquipment (["365"]);