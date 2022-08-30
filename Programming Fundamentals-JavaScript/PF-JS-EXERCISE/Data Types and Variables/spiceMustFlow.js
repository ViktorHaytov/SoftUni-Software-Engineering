function spiceMustFlow (yield) {

    let daysCount = 0;
    let totalAmount = 0;

    while (yield >= 100) {
        daysCount++;
        totalAmount += (yield - 26);
        yield -= 10;        
    }

    if (totalAmount > 26) {
        totalAmount -= 26;
    }

    console.log(daysCount);
    console.log(totalAmount);

}

spiceMustFlow (450);