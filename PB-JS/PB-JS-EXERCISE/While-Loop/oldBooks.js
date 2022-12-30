function oldBooks (input) {

    let favouriteBook = input[0];

    let index = 1;
    let command = input[index];

    let bookIsFound = false;
    let numberBooks = 0;

    while (command !== "No More Books") {
        
        if (command === favouriteBook) {
            bookIsFound = true;
            break;
        }

        numberBooks++;

        index++;
        command = input[index];

    }

    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${numberBooks} books.`);
    }else {
        console.log(`You checked ${numberBooks} books and found it.`);
    }
    
}

oldBooks (["Troy","Stronger","Life Style","Troy"]);