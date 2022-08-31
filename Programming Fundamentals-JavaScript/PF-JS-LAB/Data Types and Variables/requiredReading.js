function requiredReading (pagesNum, readPeages, daysNum) {

    let totalTime = pagesNum / readPeages;
    let hoursPerDay = totalTime / daysNum;

    console.log(hoursPerDay);
}

requiredReading (212, 20, 2);