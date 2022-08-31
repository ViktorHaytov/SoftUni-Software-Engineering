function meetings (input) {

    let meetingsBook = {};

    for (el of input) {
        let [day, persen] = el.split(" ");

        if (!meetingsBook.hasOwnProperty(day)) {
            meetingsBook[day] = persen;
            console.log(`Scheduled for ${day}`);
            
        } else {
            console.log(`Conflict on ${day}!`);
        }

    }

    for (let day in meetingsBook) {
        console.log(`${day} -> ${meetingsBook[day]}`);
    }
}

meetings (['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);