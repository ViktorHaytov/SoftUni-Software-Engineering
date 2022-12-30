function destinationMapper (input) {

    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(input);
    let destinations = [];
    let pointsSum = 0;

    while (match !== null) {
       let destination = match.groups.destination;
       let points = destination.length;
       destinations.push(destination);
       pointsSum += points;

        match = pattern.exec(input);
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${pointsSum}`);

}

destinationMapper ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");