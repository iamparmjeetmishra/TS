// 19 Class Properties Annotations
// we can annotate class properties with a type. This allows you to define the data type of the proeprty and ensure that it is always consistent.

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
}

const person = new Person('John', 20)
console.log(person)