function furniture(input) {

    let pattern = />>(?<furniture>[A-Z]+[A-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/g;
    let match = pattern.exec(input);
    let furnitureArr = [];
    let totalSum = 0;

    while (match !== null) {

        let furnitureType = match.groups.furniture;
        let price = Number(match.groups.price);
        let quantity = Number(match.groups.quantity);

        furnitureArr.push(furnitureType);
        totalSum += price * quantity;

        match = pattern.exec(input);
    }

    console.log("Bought furniture:");
    furnitureArr.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalSum.toFixed(2)}`); 

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);