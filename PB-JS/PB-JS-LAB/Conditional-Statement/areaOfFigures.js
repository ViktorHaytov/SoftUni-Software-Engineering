function areaOfFigures (input) {

    let type = input[0];
    let result = 0;

    if (type === "square") {
        let a = Number(input[1]);
        result = a * a;
    }else if (type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b;
    }else if (type === "circle") {
        let r = Number(input[1]);
        result = Math.pow(r, 2) * Math.PI;
    }else if (type === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        result = a * h / 2;
    }

    console.log(result.toFixed(3));

}

areaOfFigures(["triangle", "4.5", "20"]);