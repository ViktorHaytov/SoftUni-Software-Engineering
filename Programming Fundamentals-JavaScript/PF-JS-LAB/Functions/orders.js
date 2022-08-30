function orders (product, quantity) {

    let sum;

    switch (product) {
        case "coffee":
            sum = quantity * 1.50;
            break;
        case "water":
            sum = quantity * 1.00;
            break;
        case "coke":
            sum = quantity * 1.40;
            break;
        case "snacks":
            sum = quantity * 2.00;
            break;            
    }

    console.log(`${sum.toFixed(2)}`);

}

orders ("water", 5);