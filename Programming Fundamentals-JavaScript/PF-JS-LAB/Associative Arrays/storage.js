function storage (input) {

    let productsStorage = new Map();

    for (let el of input) {
        let [product, quantity] = el.split(" ");

        if (!productsStorage.has(product)) {
            productsStorage.set(product, Number(quantity));
           
        } else {
            let oldQuantity = productsStorage.get(product);
            let newQuantity = oldQuantity += Number(quantity);
            productsStorage.set(product, newQuantity);

        }
    }

    for (let kvp of productsStorage) {
        console.log(`${kvp[0]} -> ${kvp[1]} `);
    }

}

storage (['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);