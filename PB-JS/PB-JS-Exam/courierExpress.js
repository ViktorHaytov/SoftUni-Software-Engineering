function courierExpress (input) {

    let wightKg = Number(input[0]);
    let serviceType = input[1];
    let distanceKm = Number(input[2]);

    let price = 0;

    if (serviceType === "standard") {
        if (wightKg < 1) {
            price = distanceKm * 0.03;

        } else if (wightKg < 10) {
            price = distanceKm * 0.05;

        } else if (wightKg < 40) {
            price = distanceKm * 0.10;

        } else if (wightKg < 90) {
            price = distanceKm * 0.15;

        } else if (wightKg <= 150) {
            price = distanceKm * 0.20;

        }

    } else if (serviceType === "express") {
        if (wightKg < 1) {
            price = (distanceKm * 0.03) + ((0.03 * 0.80 * wightKg) * distanceKm);


        } else if (wightKg < 10) {
            price = (distanceKm * 0.05) + ((0.05 * 0.40 * wightKg) * distanceKm);

        } else if (wightKg < 40) {
            price = (distanceKm * 0.10) + ((0.10 * 0.05 * wightKg) * distanceKm);

        } else if (wightKg < 90) {
            price = (distanceKm * 0.15) + ((0.15 * 0.02 * wightKg) * distanceKm);

        } else if (wightKg <= 150) {
            price = (distanceKm * 0.20) + ((0.20 * 0.01 * wightKg) * distanceKm);

        }

    }

    console.log(`The delivery of your shipment with weight of ${wightKg.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}

courierExpress (["90",
"express",
"130"])
;