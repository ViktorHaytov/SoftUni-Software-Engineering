function oddOccurrences (input) {

    let result = new Map();
    let inputArr = input.split(" ");

    for (let el of inputArr) {
        el = el.toLowerCase();
        if (!result.has(el)) {
            result.set(el, 0);
        }
        let newValue = result.get(el);
        result.set(el, newValue + 1);
    }

    let filteredElements = Array.from(result).filter(([key, value]) => {
        return value % 2 !== 0;
    });

    let buff = "";

    for (let [k, v] of filteredElements) {
        buff += k + " ";
    }

    console.log(buff);

}

oddOccurrences ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');