function cinemaTickets (input) {

    let index = 0;
    let command = input[index];

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (command !== "Finish") {
        let movieName = command;
        index++;
        let freePlaces = Number(input[index]);
        index++;
        command = input[index];

        let currentTickets = 0;
        
        while (command !== "End") {

            totalTickets++;
            currentTickets++;
            if (command === "student") {
                studentTickets++;

            } else if (command === "standard") {
                standardTickets++

            } else if (command === "kid") {
                kidTickets++;

            }

            if (currentTickets >= freePlaces ) {
                break;
            }


            index++;
            command = input[index];
        }

        let totalCinemaPlaces = currentTickets / freePlaces * 100;
        console.log(`${movieName} - ${totalCinemaPlaces.toFixed(2)}% full.`);

        index++;
        command = input[index];
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets (["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);