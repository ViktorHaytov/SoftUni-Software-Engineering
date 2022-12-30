function deserializeString (input) {

    let index = 0;
    let command = input[index];
    let obj = new Map();
    

    while (command !== "end") {
        let token = command.split(":");
        let letter = token.shift();
        let numArr = token.join().split("/");

        for (let num of numArr) {
            num = Number(num)
            
            obj.set(num, letter);
        }
        
        index++;
        command = input[index];

    }

    let sortObj = Array.from(obj).sort(([keyA, valueA], [keyB, valueB]) => keyA - keyB);
    let buffer = "";

    for (let [key, value] of sortObj) {
        buffer += value;
    }

    console.log(buffer);

}

deserializeString (['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']);