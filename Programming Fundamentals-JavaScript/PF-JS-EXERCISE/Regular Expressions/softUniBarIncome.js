function softUniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$.%]*<(?<product>[A-Z][a-z]+)>[^|$.%]*\|(?<count>\d+)\|[^|$.%]*?(?<price>\d+\.?\d*)\$/g;
    let totalIncome = 0;

    let index = 0;
    let command = input[index];

    while (command !== 'end of shift') {
        let matches = pattern.exec(command);

        while (matches !== null) {
            let currentSum = Number(matches.groups.count) * Number(matches.groups.price);

            console.log(`${matches.groups.name}: ${matches.groups.product} - ${currentSum.toFixed(2)}`);
            totalIncome += currentSum;


            matches = pattern.exec(command);

        }

        index++;
        command = input[index];
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);