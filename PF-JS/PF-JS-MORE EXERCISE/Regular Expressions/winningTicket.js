function winningTicket(input) {

    let text = input.split(",");
    let pattern = /[\$\@\#\^]+/g;

    for (let ticket of text) {
        ticket = ticket.trim();
        if (ticket.length === 20) {
            let matches = ticket.match(pattern);
            if (matches) {
                let charactersL = matches.join("").split(", ").join("").length;
                let characters = matches.join("");
                let leftHalf = characters.slice(0, charactersL / 2);
                let rightHalf = characters.slice(charactersL / 2);
                let symbol = characters[0];

                if (leftHalf === rightHalf) {
                    if (leftHalf.length < 10) {
                        console.log(`ticket "${ticket}" - ${leftHalf.length}${symbol}`);

                    } else if (leftHalf.length >= 10) {
                        console.log(`ticket "${ticket}" - ${leftHalf.length}${symbol} Jackpot!`);
                    }

                }


            } else {
                console.log(`ticket "${ticket}" - no match`);

            }

        } else if (ticket.length < 20) {
            console.log("invalid ticket");

        }

    }

}

winningTicket("$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey");