class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        for (let el of footballPlayers) {
            let [name, age, playerValue] = el.split("/");
            playerValue = Number(playerValue);
            age = Number(age);
            let currentPlayer = this.invitedPlayers.find(x => x.name === name);

            if (!currentPlayer) {
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue
                });
            } else if (currentPlayer.name === name && currentPlayer.playerValue > playerValue) {
                currentPlayer.playerValue = playerValue;
            }
        }

        let buff = [];
        this.invitedPlayers.forEach(x => buff.push(x.name));

        return `You successfully invite ${buff.join(", ")}.`
    }

    signContract(selectedPlayer) {

        let [name, playerOffer] = selectedPlayer.split("/");
        playerOffer = Number(playerOffer);
        let currentPlayer = this.invitedPlayers.find(x => x.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let priceDiff = currentPlayer.playerValue - playerOffer;
        if (playerOffer < currentPlayer.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDiff} million more are needed to sign the contract!`)
        }

        currentPlayer.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`

    }

    ageLimit(name, age) {

        let currentPlayer = this.invitedPlayers.find(x => x.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);

        }
        if (currentPlayer.age < age) {
            let diff = age - currentPlayer.age;

            if (diff < 5) {
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;

            } else if (diff > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;

            }

        } else {
            return `${name} is above age limit!`
        }

    }

    transferWindowResult() {

        let buff = [];
        buff.push("Players list:");
        let sortedPlayers = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name))
        sortedPlayers.forEach(x => buff.push(`Player ${x.name}-${x.playerValue}`));

        return buff.join("\n");
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());