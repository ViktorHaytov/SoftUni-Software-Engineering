function phoneBook (input) {

    let book = {};

    for (let el of input) {
        let [name, telNumber] = el.split(" ");

        book[name] = telNumber;
    }

    for (let name in book) {
      console.log(`${name} -> ${book[name]}`);

    }

}

phoneBook (['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);