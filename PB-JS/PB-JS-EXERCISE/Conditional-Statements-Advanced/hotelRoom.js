function hotelRoom (input) {

    let month = input[0];
    let overnights = Number(input[1]);

    let studioSum = 0;
    let apartmentSum = 0;

    if (month === "May" || month === "October") {

        studioSum = overnights * 50;
        apartmentSum = overnights * 65;

        if (overnights > 14) {
            studioSum = studioSum * 0.70;
            apartmentSum = apartmentSum * 0.90;
        }else if (overnights > 7) {
            studioSum = studioSum * 0.95;
        }

    }else if (month === "June" || month === "September") {

        studioSum = overnights * 75.20;
        apartmentSum = overnights * 68.70;

        if (overnights > 14) {
            studioSum = studioSum * 0.80
            apartmentSum = apartmentSum * 0.90;
        }

    }else if (month === "July" || month === "August") {

        studioSum = overnights * 76;
        apartmentSum = overnights * 77;

        if (overnights > 14) {

            apartmentSum = apartmentSum * 0.90;

        }

    }

    console.log(`Apartment: ${apartmentSum.toFixed(2)} lv.`);
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`);
}

hotelRoom (["May", "15"]);