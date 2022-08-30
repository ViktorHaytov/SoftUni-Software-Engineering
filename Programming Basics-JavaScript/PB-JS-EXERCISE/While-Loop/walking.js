function walking (input) {

    let index = 0;
    let command = input[index];
    

    let stepsSum = 0;
   

    while (command !== "Going home") {
        let steps = Number(command);

        stepsSum += steps;

           
        if (stepsSum >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - 10000} steps over the goal!`);
            break;
        }

    
        index++;
       command = input[index]
       
    }

    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        stepsSum += stepsToHome;

        if (stepsSum < 10000) {

            console.log(`${10000 - stepsSum} more steps to reach goal.`);

        }else {

            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - 10000} steps over the goal!`);

        }

    }
    
}

walking (["1000","1500","2000","6500"]);