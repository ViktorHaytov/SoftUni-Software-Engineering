function songs (input) {

    class Song {
        constructor (type, name, time) {
            this.typeList = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let songsNum = input.shift();
    let typeSong = input.pop();

    for (let el of input) {
        let [typeList, name, time] = el.split("_");
        let song = new Song (typeList, name, time);
        songs.push(song);
    }

    if (typeSong === "all") {
        songs.forEach((objEl) => console.log(objEl.name))
    
    } else {
        let filtered = songs.filter((objEl) => objEl.typeList === typeSong);
        filtered.forEach((objEl) => console.log(objEl.name));
        

    }

}

songs ([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);