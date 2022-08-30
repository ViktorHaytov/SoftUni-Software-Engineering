function cats (inputArr) {
    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let myCat = [];

    for (let currentCat of inputArr) {
        let [catName, catAge] = currentCat.split(" ");
        let newCat = new Cat (catName, catAge);
        myCat.push(newCat);
    }
    for (let cat of myCat) {
        cat.meow();
    }

}

cats (['Mellow 2', 'Tom 5']);