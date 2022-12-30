function highJump (input) {

    let index = 0;
    let desiredHeight = Number(input[index]);

    let initialHeight = desiredHeight - 30;
    let jumpsCount = 0;
    let failedCount = 0;


    
        for (let i = initialHeight; i <= desiredHeight; i++) {
            index++;
            let jump = Number(input[index]);
          

            if (failedCount === 3) {
                console.log(`Tihomir failed at ${initialHeight}cm after ${jumpsCount} jumps.`);
                break;
            }

            jumpsCount++;

            if (initialHeight >= desiredHeight) {
                console.log(`Tihomir succeeded, he jumped over ${initialHeight}cm after ${jumpsCount} jumps.`);
                break;
            }

            if (jump > initialHeight) {
                initialHeight += 5;
                failedCount = 0;
                
            } else {
                failedCount++;
                
            }
        }
    
}

highJump (["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"]);