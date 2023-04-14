function primeNumberChecker (num) {

    let isPrime = false;
    
     for (let i = num; i >= 2; i--) {

         if (num % i === 0 && i !== num) {
             isPrime = false;
             break;
         } else {
             isPrime = true;
         }
     }  
     
     let result = isPrime ? "true" : "false";

     console.log(result);
    

}
primeNumberChecker (8);