// 25 Type Narrowing
// Type Narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code.

// TS Provides several mechanisms for narrowing types
// 1) Type guards
// 2) The instance of operator
// 3) Intersection types

// Type guards
// Type Guard are mechanisms that help TS understand and narrow down the types more precisely. One common type guard is the typeof operator




// Define a union type
type MyType = string | number;

// Example function with the type guard
function exampleFunction(value: MyType): void {
    // type guard using typeof
    if (typeof value === 'string') {
        // within this block, TS know that 'value' is a string
        console.log(value.toUpperCase())
    } else {
        //within this block, TS know that 'value' is a number
        console.log(value.toFixed(2))
    }
}

// Usage
exampleFunction('Hello')
exampleFunction(44)


// 2) instanceof narrowing

class Dog {
    bark(): void {
        console.log('Woof!')
    }
}

class Cat {
    meow(): void {
        console.log('Meow!')
    }
}

// Example Function with isntanceof Type guard
function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        // within this block, TS know that 'animal' is an instance of Dog
        animal.bark()
    } else {
        // within this block, TS know that 'animal' is an instance of Cat
        animal.meow()
    }
}

// Usage
const myDog = new Dog()
const myCat = new Cat()

animalSound(myCat)
animalSound(myDog)

// 03 ) Intersection Types

// Define two types
type Employee = {
    id: number;
    name: string;
}

type Manager = {
    department: string;
    role: string;
}

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager;

// Usage
const manager: ManagerWithEmployeeInfo = {
    id: 123,
    name: 'John doe',
    department: 'CSE',
    role: 'Team Lead'
}

console.log(manager)