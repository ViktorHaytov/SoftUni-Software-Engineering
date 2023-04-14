function gymnastics (input) {

    let country = input[0];
    let subject = input[1];

    let totalPoints = 0;

    if (country === "Russia") {
        if (subject === "ribbon") {
            totalPoints = 9.100 + 9.400;

        } else if (subject === "hoop") {
            totalPoints = 9.300 + 9.800;

        } else if (subject === "rope") {
            totalPoints = 9.600 + 9.000;

        }

    } else if (country === "Bulgaria") {
        if (subject === "ribbon") {
            totalPoints = 9.600 + 9.400;

        } else if (subject === "hoop") {
            totalPoints = 9.550 + 9.750;

        } else if (subject === "rope") {
            totalPoints = 9.500 + 9.400;
            
        }

    } else if (country === "Italy") {
        if (subject === "ribbon") {
            totalPoints = 9.200 + 9.500;

        } else if (subject === "hoop") {
            totalPoints = 9.450 + 9.350;

        } else if (subject === "rope") {
            totalPoints = 9.700 + 9.150;
            
        }
    }

    let diff = 20 - totalPoints;

    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${subject}.`);
    console.log(`${(diff / 20 * 100).toFixed(2)}%`);

}

gymnastics (["Italy",
"hoop"]);