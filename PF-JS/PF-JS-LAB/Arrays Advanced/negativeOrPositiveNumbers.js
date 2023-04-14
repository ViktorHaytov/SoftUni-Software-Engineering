function negativeOrPositiveNumbers (arr) {

    let result = [];

    for (let el of arr) {
        el = Number(el);

        if (el >= 0) {
            result.push(el);

        } else {
            result.unshift(el);
        }
    }

    return result.join("\n");

}

console.log(negativeOrPositiveNumbers (['7', '-2', '8', '9']));