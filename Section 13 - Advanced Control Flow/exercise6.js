//Evaluate these:
//#1
// [2] === [2] // false
// {} === {}  //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };   //5
const object2 = object1;    //5
const object3 = object2;    //5
const object4 = { a: 5};    //5
object1.a = 4;              //4, also for 2 and 3


//#3 create two classes: an Animal class and a Mammal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, colour) {
        console.log("The animal is", this);
        this.name = name;
        this.type = type;
        this.colour = colour;
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}. I am a ${this.colour} ${this.type}!`);
    }
}

class Mammal extends Animal {
    constructor(name, type, colour, sound) {
        super(name, type, colour)
        this.sound = sound;
    }
    sounds() {
        console.log(`${this.sound}!!! My name is ${this.name}. I am a beautiful ${this.colour} ${this.type}!`);
    }
}

const cow1 = new Mammal('Betsy', 'cow', 'brown', 'Moooooo')
const cow2 = new Mammal('Brian', 'cow', 'purple', 'Mooooooieee')