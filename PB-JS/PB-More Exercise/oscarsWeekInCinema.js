function oscarsWeekInCinema (input) {

    let movieName = input[0];
    let movieTheater = input[1];
    let ticketsNumber = Number(input[2]);

    let moviePrice = 0;


    if (movieName === "A Star Is Born") {
        if (movieTheater === "normal") {
            moviePrice = 7.50;

        } else if (movieTheater === "luxury") {
            moviePrice = 10.50;

        } else if (movieTheater === "ultra luxury") {
            moviePrice = 13.50;

        }
            

    } else if (movieName === "Bohemian Rhapsody") {
        if (movieTheater === "normal") {
            moviePrice = 7.35;

        } else if (movieTheater === "luxury") {
            moviePrice = 9.45;

        } else if (movieTheater === "ultra luxury") {
            moviePrice = 12.75;
            
        }

    } else if (movieName === "Green Book") {
        if (movieTheater === "normal") {
            moviePrice = 8.15;

        } else if (movieTheater === "luxury") {
            moviePrice = 10.25;

        } else if (movieTheater === "ultra luxury") {
            moviePrice = 13.25;
            
        }

    } else if (movieName === "The Favourite") {
        if (movieTheater === "normal") {
            moviePrice = 8.75;

        } else if (movieTheater === "luxury") {
            moviePrice = 11.55;

        } else if (movieTheater === "ultra luxury") {
            moviePrice = 13.95;
            
        }

    }

    let totalSum = ticketsNumber * moviePrice;

    console.log(`${movieName} -> ${totalSum.toFixed(2)} lv.`);

}

oscarsWeekInCinema (["Green Book","normal","63"]);