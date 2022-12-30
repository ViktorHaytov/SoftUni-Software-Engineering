function adAstra (input) {

    let text = input[0];
    let pattern = /([#\|\|])(?<name>[A-Z][a-z]+\s?[A-Z]?[a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let match = pattern.exec(text);
    let totalCalories = 0;
    let foodInfo = [];
    
    while (match !== null) {

        totalCalories += Number(match.groups.calories);
        foodInfo.push(`Item: ${match.groups.name}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);

        match = pattern.exec(text);
    }

    let totalDays = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${totalDays} days!`);
    console.log(foodInfo.join("\n"));

}

adAstra ([
'#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);