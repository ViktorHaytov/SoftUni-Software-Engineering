function inventory (input) {

    let heroes = [];

    for (let heroesInfo of input) {
        let [hero, level, items] = heroesInfo.split(" / ");

        let currentHero = {

            hero:hero,
            level:level,
            items:items,
        }

        heroes.push(currentHero);
    }
    
    let sortedByLevel = heroes.sort((a,b) => {
        return a.level - b.level;
    });

    sortedByLevel.forEach(objHero => {
        console.log(`Hero: ${objHero.hero}`);
        console.log(`level => ${objHero.level}`);
        console.log(`items => ${objHero.items}`);
    })

}

inventory ([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara']);