function mathPower (num, power) {

    let result = 1;
    
    for (let i = 0; i < power; i++) {

        result = result * num;

    }

    console.log(result);

}

mathPower (2,8);