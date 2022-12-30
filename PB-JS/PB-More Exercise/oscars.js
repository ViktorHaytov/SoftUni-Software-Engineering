function oscars (input) {

    let rent = Number(input[0]);

    let figurinePrice = rent * 0.70;
    let catering = figurinePrice * 0.85;
    let sound = catering / 2;

    let totalSum = rent + figurinePrice + catering + sound;

    console.log(`${totalSum.toFixed(2)}`);
}

oscars (["3500"]);