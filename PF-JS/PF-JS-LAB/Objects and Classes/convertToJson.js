function convertToJson (firstName, lastName, hairColor) {

    let personObj = {
        "name": firstName,
        "lastName": lastName,
        "hairColor": hairColor,
    }

    let personObjToString = JSON.stringify(personObj)

    console.log(personObjToString);

}

convertToJson ('George', 'Jones', 'Brown');