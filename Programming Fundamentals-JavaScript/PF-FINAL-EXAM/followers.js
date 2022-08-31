function followers(input) {

    let store = {};
    let index = 0;
    let command = input[index];

    while (command !== "Log out") {
        let [action, name, countLike] = command.split(": ");

        switch (action) {
            case "New follower":
                if (!store.hasOwnProperty(name)) {
                    store[name] = [];
                    store[name].push(0);
                    store[name].push(0);
                }
                break;
            case "Like":
                if (!store.hasOwnProperty(name)) {
                    store[name] = [];
                    store[name].push(Number(countLike));
                    store[name].push(0);
                } else {
                    store[name][0] += Number(countLike);

                }
                break;
            case "Comment":
                if (!store.hasOwnProperty(name)) {
                    store[name] = [];
                    store[name].push(0);
                    store[name].push(1);
                } else {
                    store[name][1]++;

                }
                break;
            case "Blocked":
                if (!store.hasOwnProperty(name)) {
                    console.log(`${name} doesn't exist.`);
                }
                delete store[name];
                break;
        }

        index++;
        command = input[index];
    }

    let followersCount = Object.entries(store).length;

    console.log(`${followersCount} followers`);
    for (let [key, value] of Object.entries(store)) {
        console.log(`${key}: ${value[0] + value[1]}`);
    }

}

followers(["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"]);