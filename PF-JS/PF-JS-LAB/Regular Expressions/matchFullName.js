function matchFullName (input) {

    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}\b/g;
    let match = pattern.exec(input);
    let result = [];

    while (match !== null) {
        result.push(match[0]);

        match = pattern.exec(input);
    }

    console.log(result.join(" "));

}

matchFullName ("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");