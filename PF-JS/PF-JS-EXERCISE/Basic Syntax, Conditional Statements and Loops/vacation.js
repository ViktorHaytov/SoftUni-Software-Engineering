function vacation (groupNum, groupType, day) {

    let totalSum = 0;

    if (groupType === "Students") {
        if (day === "Friday") {
            totalSum = groupNum * 8.45;

        } else if (day === "Saturday") {
            totalSum = groupNum * 9.80;

        } else if (day === "Sunday") {
            totalSum = groupNum * 10.46;

        }

        if (groupNum >= 30) {
            totalSum *= 0.85;
        }

    } else if (groupType === "Business") {

        if (groupNum >= 100) {
            groupNum -= 10;
        }

        if (day === "Friday") {
            totalSum = groupNum * 10.90;

        } else if (day === "Saturday") {
            totalSum = groupNum * 15.60;

        } else if (day === "Sunday") {
            totalSum = groupNum * 16;
            
        }

    } else if (groupType === "Regular") {
        if (day === "Friday") {
            totalSum = groupNum * 15;

        } else if (day === "Saturday") {
            totalSum = groupNum * 20;

        } else if (day === "Sunday") {
            totalSum = groupNum * 22.50;
            
        }

        if (groupNum >= 10 && groupNum <= 20) {
            totalSum *= 0.95;
        }

    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
}

vacation (30,"Students", "Sunday");