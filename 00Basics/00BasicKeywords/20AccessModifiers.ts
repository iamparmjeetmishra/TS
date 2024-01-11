// 20 Access Modifiers
// In TS, we can use access modifiers to control the visibility of class members ( properties and methods). Access Modifiers determine the way in which class members can be accessed from within and outside the class.

// There are three types of access modifiers in TS
// - Public: accessible from anywhere (default)
// - Private: Members marked as private can only be accessed from within the class they are defined in.
// - Protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

class Animal {
    public name: string;
    private age: number;
    protected species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species
    }

    public getName(): string {
        return this.name;
    }

    private getAge(): number {
        return this.age
    }

    protected getSpecies(): string {
        return this.species
    }
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age, 'Canine')
    }

    // public getInfo(): string {
    //     return `${this.getName()} is a ${this.getSpecies()} and is ${this.age} years old`;
    // }
}

// let ani = new Animal('Dog', 30, 'Canine')

// console.log(ani)

class Person {
    private first: string;
    public last: string;
    protected age: number;

    constructor(first: string, last: string, age: number) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    getName(): string {
        return `${this.first} ${this.last}, Age: ${this.age}`
    }
}

let p1 = new Person('John', 'Doe', 30)
console.log(p1)
console.log(p1.last)
console.log(p1.getName())