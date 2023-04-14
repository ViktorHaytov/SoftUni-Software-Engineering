function cardGame2 (input) {

    let result = new Map();
    
    for (let el of input) {
        let token = el.split(": ");
        let name = token[0];
        let cardsAsString = token[1];
        let cardsArr = cardsAsString.split(", ");

        if (!result.has(name)) {
            result.set(name, new Set());
        }

        for (let card of cardsArr) {
            result.get(name).add(card);

        }

    }

    for (let [key , value] of result) {
        let totalSum = calcCard(value);

        console.log(`${key}: ${totalSum}`);
    }

    function calcCard (deckCard) {
        let cardsPower = {
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "10": 10,
            "J": 11,
            "Q": 12,
            "K": 13,
            "A":14,
        };
        let cardsType = {
            "S": 4,
            "H": 3,
            "D": 2,
            "C": 1,
    
        };

        let totalSum = 0;

        for (let el of deckCard) {
            let tokens = el.split("");
            let typeCard = tokens.pop();
            let powerCard = tokens.join("");
            
            let sum = cardsPower[powerCard] * cardsType[typeCard];
            totalSum += sum;  
        }

        return totalSum;

    }


}

cardGame2 (['Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD']);