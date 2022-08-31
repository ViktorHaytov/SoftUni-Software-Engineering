function towns (input) {

    let townsInfo = {};

    for (let city of input) {
        let [currentTown, latitude, longitude ] = city.split(" | ");
        townsInfo.town = currentTown;
        townsInfo.latitude = Number(latitude).toFixed(2);
        townsInfo.longitude = Number(longitude).toFixed(2);

        console.log(townsInfo);
    }
}

towns (['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);