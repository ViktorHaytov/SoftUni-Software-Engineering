function skiTrip (input) {

    let daysForStay = Number(input[0]) - 1;
    let room = input[1];
    let evaluation = input[2];

    let price = 0;
    
    

    if (daysForStay < 10) {
        if (room === "room for one person") {
            price = daysForStay * 18.00;

        } else if (room === "apartment") {
            price = (daysForStay * 25.00) * 0.70;
            

        } else if (room === "president apartment") {
            price = (daysForStay * 35.00) * 0.90;

        }    


    } else if (daysForStay >= 10 && daysForStay <= 15) {
        if (room === "room for one person") {
            price = daysForStay * 18.00;
            

        } else if (room === "apartment") {
            price = (daysForStay * 25.00) * 0.65;
            

        } else if (room === "president apartment") {
            price = (daysForStay * 35.00) * 0.85;
            
        }

    } else if (daysForStay > 15) {
        if (room === "room for one person") {
            price = daysForStay * 18.00;
            

        } else if (room === "apartment") {
            price = (daysForStay * 25.00) * 0.50;
            

        } else if (room === "president apartment") {
            price = (daysForStay * 35.00) * 0.80;
        } 

    }

    if (evaluation === "positive") {
        price = price * 1.25;

    } else if (evaluation === "negative") {
        price = price * 0.90;

    }

    console.log(price.toFixed(2));
}

skiTrip (["14", "apartment", "positive"]);