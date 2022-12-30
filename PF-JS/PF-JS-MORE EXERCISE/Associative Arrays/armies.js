function armies (array) {

    let armiesObj = {};
 
    for (let line of array) {
        if (line.includes('arrives')) {
            let leader = line.split(' arrives')[0]
            armiesObj[leader] = {
                maxPower: 0,
                army: {}
            }
        } else if (line.includes(': ')) {
            let [leader, army] = line.split(': ');
            let [armyName, armyCount] = army.split(', ')
            armyCount = Number(armyCount);
            if (armiesObj.hasOwnProperty(leader)) {
                armiesObj[leader]['army'][armyName] = armyCount;
                armiesObj[leader]['maxPower'] += armyCount;
            }
        } else if (line.includes(' + ')) {
            let [armyName, armyCount] = line.split(' + ');
            armyCount = Number(armyCount);
            for (let leader in armiesObj) {
                if (armiesObj[leader]['army'].hasOwnProperty(armyName)) {
                    armiesObj[leader]['army'][armyName] += armyCount;
                    armiesObj[leader]['maxPower'] += armyCount;
 
                }
            }
        } else if (line.includes('defeated')) {
            let leader = line.split(' defeated')[0];
            if (armiesObj.hasOwnProperty(leader)) {
                delete armiesObj[leader];
            }
        }
    }
    let sortLeaders = (a, b) => b[1]['maxPower'] - a[1]['maxPower'];
    let sortArmy = (a, b) => b[1] - a[1];
    for (let [firstKey, firstValue] of Object.entries(armiesObj).sort(sortLeaders)) {
        console.log(`${firstKey}: ${armiesObj[firstKey].maxPower}`);
        for (let [secondKey, secondValue] of Object.entries(firstValue)) {
            if (secondKey === 'army')
                for (let [thirdKey, thirdValue] of Object.entries(secondValue).sort(sortArmy)) {
                    console.log(`>>> ${thirdKey} - ${thirdValue}`)
                }
        }
    }
}
   

armies (['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 3440', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);