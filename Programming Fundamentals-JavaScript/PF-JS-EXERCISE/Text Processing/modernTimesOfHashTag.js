function modernTimesOfHashTag (input) {

    let text = input.split(" ");

    for (let el of text) {

        if (el.startsWith("#") && el.length > 1) {
            let word = el.toLowerCase();
            let flag = true;

            for(let i = 1; i < word.length; i++) {
                if (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
                    flag = false;
                    break;
                }
            } 

            if (flag) {
                console.log(el.slice(1));
            }

        }

    }

}

modernTimesOfHashTag ('Nowadays everyone uses # to tag a #special word in #socialMedia');