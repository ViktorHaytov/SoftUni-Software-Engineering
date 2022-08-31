function censoredWords (string, word) {

   let censored = string.replace(word, "*".repeat(word.length));

   while (censored.includes(word)) {
    censored = censored.replace(word, "*".repeat(word.length));
    
   }

   console.log(censored);

}

censoredWords ('A small sentence with some words', 'small');