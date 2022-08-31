function friendListMaintenance (input) {

    let list = input.shift().split(", ");

    let index = 0;
    let command = input[index];

    let blacklistCount = 0;
    let lostlistCount = 0;

    while (command !== "Report") {
        command = command.split(" ");
        let currentCommand = command.shift();

        switch (currentCommand) {
            case "Blacklist":
                let name = command[0];
                if (list.includes(name)) {
                    blacklistCount++;
                   let i = list.indexOf(name);
                   list[i] = "Blacklisted";
                   console.log(`${name} was blacklisted.`);
                } else {
                    console.log(`${name} was not found.`);
                }
                break;
            case "Error":
                let currentIndex = Number(command[0]);
                if (currentIndex < 0 || currentIndex > list.length - 1) {
                    index++;
                    command = input[index];
                    continue;
                } else {
                    if (list[currentIndex] !== "Blacklisted" && list[currentIndex] !== "Lost") {
                        lostlistCount++;
                        let nameOfIndex = list[currentIndex];
                        list[currentIndex] = "Lost";
                        console.log(`${nameOfIndex} was lost due to an error.`);

                    } else {
                        index++;
                        command = input[index];
                        continue;
                    }
                }
                break;
            case "Change":
                let currIndex = Number(command[0]);
                let newName = command[1];
                if (currIndex < 0 || currIndex > list.length - 1) {
                    index++;
                    command = input[index];
                    continue;
                } else {
                    let currentName = list[currIndex];
                    list[currIndex] = newName;
                    console.log(`${currentName} changed his username to ${newName}.`);

                }
                break;
        }
        index++;
        command = input[index];
    }

    console.log(`Blacklisted names: ${blacklistCount}`);
    console.log(`Lost names: ${lostlistCount}`);
    console.log(list.join(" "));

}

friendListMaintenance ((["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"]));