function pcGameShop (input) {

    
    let n = Number(input[0]);

    let hearthstoneCount = 0;
    let forniteCount = 0;
    let overwatchCount = 0;
    let othersCount = 0;
    let totalCount= 0;


    for (let i = 1; i <= n; i++) {
        let games = input[i];
        totalCount++;

        if (games === "Hearthstone") {
            hearthstoneCount++;

        } else if (games === "Fornite") {
            forniteCount++;

        } else if (games === "Overwatch") {
            overwatchCount++;

        } else {
            othersCount++;
        }

    }

    console.log(`Hearthstone - ${(hearthstoneCount / totalCount * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteCount / totalCount * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCount / totalCount * 100).toFixed(2)}%`);
    console.log(`Others - ${(othersCount / totalCount * 100).toFixed(2)}%`);

}

pcGameShop (["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"]);