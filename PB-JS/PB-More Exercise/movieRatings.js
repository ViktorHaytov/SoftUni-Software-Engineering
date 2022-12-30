function movieRatings (input) {

    let movieNumber = Number(input[0]);

    let maxRating = Number.MIN_SAFE_INTEGER;
    let maxRatMovie = "";
    let minRating = Number.MAX_SAFE_INTEGER;
    let minRatMovie = "";

    let sumRating = 0;

    for (let i = 1; i < input.length; i++) {
        if (i % 2 !== 0) {
         let movieName = input[i];
       let movieRating = Number(input[i + 1]);

       sumRating += movieRating;

       if (maxRating < movieRating) {
           maxRating = movieRating;

           maxRatMovie = movieName;

       } else if ( minRating > movieRating) {
            minRating = movieRating;

            minRatMovie = movieName;
            
       }

          
    }
     
    }

    let avRating = sumRating / movieNumber;

    console.log(`${maxRatMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${avRating.toFixed(1)}`);

    
}

movieRatings (["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"]);