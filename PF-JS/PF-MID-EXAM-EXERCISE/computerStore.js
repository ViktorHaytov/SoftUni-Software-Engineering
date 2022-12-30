function computerStore (inputArr) {

    let index = 0;
    let command = inputArr[index];
    
    let isSpecial = false;
    let totalSum = 0;

    while (command !== "regular") {
        if (command === "special") {
            isSpecial = true;
            break;
        }
        let price = Number(command);

        if (price < 0) {
            console.log("Invalid price!");
            index++;
            command = inputArr[index];
            continue;

        } else {
            totalSum += price;

        }

        index++;
        command = inputArr[index];
    }

    let taxes = totalSum * 0.20;
    let totalPrice = totalSum + taxes;

    if (totalPrice === 0) {
        console.log("Invalid order!");

    } else if (isSpecial) {
        let discountPrice = totalPrice * 0.90;

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${discountPrice.toFixed(2)}$`);

    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}

computerStore (['1050','200','450','2','18.50','16.86','special']);