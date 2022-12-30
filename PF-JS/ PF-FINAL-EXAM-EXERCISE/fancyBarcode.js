function fancyBarcode(input) {

    let n = Number(input.shift());
    let pattern = /@#{1,}(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#{1,}/g;

    for (let i = 0; i < n; i++) {
        let validBarcode = pattern.exec(input[i])
        let isValid = false;
        let productGroup = "";

        while (validBarcode !== null) {
            isValid = true;
            let products = validBarcode.groups.product;

            for (let ch of products) {

                if (!isNaN(Number(ch))) {
                    productGroup += ch;

                }
            }

            validBarcode = pattern.exec(input[i]);
        }

        if (isValid) {
            productGroup = productGroup !== "" ? productGroup : "00";
            console.log(`Product group: ${productGroup}`);

        } else {
            console.log("Invalid barcode");
        }

    }

}

fancyBarcode(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);