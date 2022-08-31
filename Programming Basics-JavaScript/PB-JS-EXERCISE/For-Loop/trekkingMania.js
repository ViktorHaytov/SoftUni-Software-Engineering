function trekkingMania (input) {

    let numberGroups = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;


    for (let i = 1; i < input.length; i++) {

        let peopleInGroup = Number(input[i]);

        if (peopleInGroup <= 5) {
            musala += peopleInGroup;


        }else if (peopleInGroup <= 12) {
            monblan += peopleInGroup;

        }else if (peopleInGroup <= 25){
            kilimandjaro += peopleInGroup;

        }else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;

        } else {
            everest += peopleInGroup;

        }

    }

    let allPeople = musala + monblan + kilimandjaro + k2 + everest;
    
    console.log(`${(musala / allPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / allPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / allPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / allPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / allPeople * 100).toFixed(2)}%`);
    
    }


trekkingMania (["5","25","41","31","250","6"]);