function partyTime (input) {

    let vip = [];
    let regular = [];

    let isParty = false;

    for (let el of input) {

        if (el === "PARTY") {
            isParty = true;
            continue;
        }

        if (!isParty) {
            let firstCh = el[0];
            if (isNaN(firstCh)) {
                regular.push(el);

            } else {
                vip.push(el);
            }
        } else {
            if (vip.includes(el)) {
                let index = vip.indexOf(el);
                vip.splice(index, 1);

            } else {
                let index = regular.indexOf(el);
                regular.splice(index, 1);
            }
        }

    }

    let totalElements = vip.length + regular.length;
    
    console.log(totalElements);
    console.log(vip.join("\n"));
    console.log(regular.join("\n"));

}

partyTime (['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc', 
'tSzE5t0p', 
'PARTY', 
'9NoBUajQ', 
'Ce8vwPmE', 
'SVQXQCbc']);