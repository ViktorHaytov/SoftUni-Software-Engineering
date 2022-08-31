function storeProvision (stockArr, orderedArr) {

    let productsList = {};

    for (let i = 0; i < stockArr.length; i += 2) {
        let product = stockArr[i];
        let productQuantity = Number(stockArr[i + 1]);
        productsList[product] = productQuantity;
    }
    for (let j = 0; j < orderedArr.length; j += 2) {
        let product = orderedArr[j];
        let orderedQuantity = Number(orderedArr[j + 1]);

        if (!productsList.hasOwnProperty(product)) {
            productsList[product] = 0;

        }
        
        productsList[product] += orderedQuantity;
 
    }
    for (let product in productsList) {
        console.log(`${product} -> ${productsList[product]}`);
    }

}

storeProvision ([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30']);