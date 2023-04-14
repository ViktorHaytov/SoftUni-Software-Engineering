function onTimeForExam (input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examTime = examHour * 60 + examMin;
    let arriveTime = arriveHour * 60 + arriveMin;

    let diff = Math.abs(examTime - arriveTime);

    let h = Math.floor(diff / 60);
    let min = diff % 60;

    if (arriveTime > examTime) {
        console.log("Late");
        if (diff >= 60) {
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            }else {
                console.log(`${h}:${min} hours after the start`);
            }
        }else {
            console.log(`${diff} minutes after the start`);
        }

    } else if (arriveTime === examTime || diff <= 30) {
        console.log("On time");

        if (diff !== 0) {
            console.log(`${diff} minutes before the start`);
        }

    } else {
        console.log("Early");

        if (diff >= 60) {
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            }else {
                console.log(`${h}:${min} hours before the start`);
            }
        }else {
            console.log(`${diff} minutes before the start`);
        }
    }
    
}

onTimeForExam (["11","30","8","12"]);