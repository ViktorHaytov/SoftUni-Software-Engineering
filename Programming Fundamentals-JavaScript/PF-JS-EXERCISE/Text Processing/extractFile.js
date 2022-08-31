function extractFile (input) {

    let fileArr = input.split("\\");
    let file = fileArr.pop().split(".");
    let extension = file.pop();
    let name = file.join(".");

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}

extractFile ('C:\\Internal\\training-internal\\Template.pptx');