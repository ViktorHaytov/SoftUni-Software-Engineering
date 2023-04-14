function race(input) {

    let namesArr = input.shift().split(", ");
    let nameMap = new Map();
    let index = 0;
    let command = input[index];

    namesArr.forEach(persen => {
        nameMap.set(persen, 0);
    });

    let lettersPattern = /[A-Za-z]+/g;
    let digitsPattern = /\d/g;
    

    while (command !== 'end of race') {
        let name = command.match(lettersPattern).join("");
        let distance = (command.match(digitsPattern)).reduce((a, b) => {
            return Number(a) + Number(b);
        },0);

        if (nameMap.has(name)) {
          let currentDistance = nameMap.get(name);
          currentDistance += distance
          nameMap.set(name, currentDistance)
        }

        index++;
        command = input[index];

    }

    let nameSort = Array.from(nameMap).sort((a, b) => {
        return b[1] - a[1];
    });
    let topThree = nameSort.slice(0, 3);

    console.log(`1st place: ${topThree[0][0]}`);
    console.log(`2nd place: ${topThree[1][0]}`);
    console.log(`3rd place: ${topThree[2][0]}`);  

}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);