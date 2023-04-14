function filmPremiere (input) {

    let movie = input[0];
    let moviePackage = input[1];
    let ticketsNum = Number(input[2]);

    let totalPrice = 0;

    if (movie === "John Wick") {
        if (moviePackage === "Drink") {
            totalPrice = ticketsNum * 12;

        } else if (moviePackage === "Popcorn") {
            totalPrice = ticketsNum * 15;

        } else if (moviePackage === "Menu") {
            totalPrice = ticketsNum * 19;

        }

    } else if (movie === "Star Wars") {
        if (moviePackage === "Drink") {
            totalPrice = ticketsNum * 18;

        } else if (moviePackage === "Popcorn") {
            totalPrice = ticketsNum * 25;

        } else if (moviePackage === "Menu") {
            totalPrice = ticketsNum * 30;  
        }
        if (ticketsNum >= 4) {
            totalPrice *= 0.70;
        }

    } else if (movie === "Jumanji") {
        if (moviePackage === "Drink") {
            totalPrice = ticketsNum * 9;

        } else if (moviePackage === "Popcorn") {
            totalPrice = ticketsNum * 11;

        } else if (moviePackage === "Menu") {
            totalPrice = ticketsNum * 14;
            
        }
        if (ticketsNum === 2) {
            totalPrice *= 0.85;
        }

    }

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

filmPremiere (["John Wick",
"Drink",
"6"]);