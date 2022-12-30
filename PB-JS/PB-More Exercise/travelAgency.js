function travelAgency (input) {

    let town = input[0];
    let vacationTipe = input[1];
    let vipDiscount = input[2];
    let days = Number(input[3]);

    let price = 0;
    let isValid = false;
    let isNegativeNum = false;

    if (days < 1) {
       isNegativeNum = true; 
    } 

    if (days > 7) {
        days = days - 1;
    }

    if ((town === "Bansko" || town === "Borovets") && days > 0) {
        if (vacationTipe === "withEquipment") {
            isValid = true;
            if (vipDiscount === "yes") {
                price = days * (100 - 100 * 0.10);

            } else if (vipDiscount === "no") {
                price = days * 100;
            }

        } else if (vacationTipe === "noEquipment") {
            isValid = true;
            if (vipDiscount === "yes") {
                price = days * (80 - 80 * 0.05);
            } else if (vipDiscount === "no") {
                price = days * 80;
                
              }
       }

    }  else if ((town === "Varna" || town === "Burgas") && days > 0) {
         if (vacationTipe === "withBreakfast") {
            isValid = true;
            if (vipDiscount === "yes") {
                price = days * (130 - 130 * 0.12);
            } else if (vipDiscount === "no") {
                price = days * 130;  
            }
        } else if (vacationTipe === "noBreakfast") {
            isValid = true;
            if (vipDiscount === "yes") {
                price = days * (100 - 100 * 0.07);
            } else if (vipDiscount === "no") {
                price = days * 100;
       
            }
        }

    }

    if (isValid) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);

    } else if (isNegativeNum) {
        console.log("Days must be positive number!");

    } else {
        console.log("Invalid input!");

    }

    
}

travelAgency (["Varna",
"withBreakfast",
"no",
"0"]);