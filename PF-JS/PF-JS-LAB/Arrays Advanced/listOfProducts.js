function listOfProducts (arrProducts) {

    let orderedByName = arrProducts.sort();

   for (let i = 0; i < orderedByName.length; i++) {
    console.log(`${i + 1}.${orderedByName[i]}`);
   }

}

listOfProducts (['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
