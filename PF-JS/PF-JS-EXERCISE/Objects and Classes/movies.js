function movies (input) {

    let moviesInfo = [];

    input.forEach((el) => {
        if (el.includes("addMovie ")) {
            let movie = el.replace("addMovie ", "");
            moviesInfo.push({name:movie});

        } else if (el.includes("directedBy")) {
            let [name, director] = el.split(" directedBy ");
            moviesInfo.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            })

        } else if (el.includes("onDate")) {
            let [name, date] = el.split(" onDate ");
            moviesInfo.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }    
    });
     
    moviesInfo.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })

} 

movies ([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);