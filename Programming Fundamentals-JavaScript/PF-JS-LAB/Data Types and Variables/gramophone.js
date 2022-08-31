function gramophone (bandName, albumNme, songNme) {

    let songDuration = (bandName.length * albumNme.length) * songNme.length / 2;

    let timeRotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${timeRotations} times.`);
}

gramophone ('Black Sabbath', 'Paranoid', 'War Pigs');