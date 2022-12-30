function addressBook (input) {

    let adressStore = {};

    for (let el of input) {
        let [name, adress] = el.split(":");

        adressStore[name] = adress;
    }

    let unsortedKeys = Object.keys(adressStore);
    let sortedKeys = unsortedKeys.sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {
        console.log(`${key} -> ${adressStore[key]}`);

    }

}

addressBook (['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);