function makeADictionary (input) {

    let obj = {};  
    let allElements = [];
    
    for (let el of input) {
      let parsedElement = JSON.parse(el);
      let tempTermAndDefinition = Object.entries(parsedElement);
      let tempKey = Object.keys(parsedElement);

      if (allElements.includes(tempTermAndDefinition[0])) {

        obj[tempTermAndDefinition[0]] = tempTermAndDefinition[1];

      } else {
        obj = Object.assign(obj, parsedElement);
        allElements.push(tempKey);
      }

    }  

    let terms = Object.keys(obj);
    terms = terms.sort();
    for (let term of terms) {
      console.log(`Term: ${term} => Definition: ${obj[term]}`);
    }
}

makeADictionary (['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of atropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road,typically one serving the public on a fixed route and for afare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);