function reverseString (name) {

    let reverseName = "";

   for (let i = name.length - 1; i >= 0; i--) {
        let letter = name[i];

        reverseName += letter;

   }

    console.log(reverseName);
}

reverseString ("Hello");