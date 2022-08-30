function vacationBooksList(input) {

    let pagesNumber = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let allTime = pagesNumber / pagesPerHour;
    let hoursPerDay = allTime / daysToRead;

    console.log(hoursPerDay);

}

vacationBooksList(["212", "20", "2"]);