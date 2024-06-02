// 22 Interface
// Interface is a way to define a contact for the shape of an object. It specifies the properties and their types that an object must have. Interfaces are a powerful tool for enforcing a certain structure in your code.

// While Interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TS can also be used to describe the shape of functions and classes.


// Interface Definition
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void;
}

// usage
function greet(person: Person)  {
    console.log(`Hello ${person.firstName} ${person.lastName}`)
    person.sayHello();
}

const John: Person = {
    firstName: 'John',
    lastName: 'Diem',
    age: 22,
    sayHello() {
        console.log('hello')
    }
}
greet(John) 

// Interface for a function
interface MathOperation {
    (x: number, y: number): number;
}

// usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3))
console.log(subtract(6, 2))

// 3rd

// Interface for a class

interface Vehicle {
    start(): void;
    stop(): void;
}

// Class Implementing the interface
class Car implements Vehicle {
    start() {
        console.log('car Started')
    }

    stop() {
        console.log('car Stopped')
    }
}

// Usage
const myCar = new Car()
myCar.start()
myCar.stop()



// Extending Interface

interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieINfo(name: string, price: number, ratings: number): string | number
}

interface MovieGenra extends MovieDetails {
    genra: string;
}


const movie1: MovieGenra = {
    name: 'Star wars',
    genra: 'Action',
    ratings: 8.9,
    printMovieINfo(name: string, price: number, ratings: number): string | number {
        return `Movie Name: ${name}, Price: ${price}, Ratings: ${ratings}`
    }
}

const res = movie1.printMovieINfo('John Wick', 100, 8)

console.log(res)