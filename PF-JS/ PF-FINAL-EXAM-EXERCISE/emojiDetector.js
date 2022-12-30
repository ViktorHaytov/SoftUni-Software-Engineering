function emojiDetector(input) {

    let text = input[0];
    let digitsPattern = /\d/g;
    let matchDigits = text.match(digitsPattern)
    let emojiPattern = /(\*{2}|:{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let matchEmojis = emojiPattern.exec(input);
    let coolNumber = 1;
    let emojisCount = 0;
    let coolEmojis = [];

    matchDigits.forEach(element => {
        coolNumber *= Number(element);
    });

    while (matchEmojis !== null) {
        emojisCount++;
        let coolnessCount = 0;
        let emoji = matchEmojis.groups.emoji
        for (let ch of emoji) {
            let emojiCh = ch.charCodeAt()
            coolnessCount += emojiCh;

        }

        if (coolnessCount > coolNumber) {
            coolEmojis.push(matchEmojis[0]);
        }

        matchEmojis = emojiPattern.exec(input);
    }

    console.log(`Cool threshold: ${coolNumber}`);
    console.log(`${emojisCount} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join("\n"));
}

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);