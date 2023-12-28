// 12 - Type Aliases
// A type Alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.
// Type aliases are defined using the type keyword, followed by the name of the alias, an equal sign (=), and the type it refers to.

// type MyString = string;

type Person = {
    name: string;
    age: number;
}

function printPerson(person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`)
}

let myPerson: Person = { name: 'Alex', age: 33 };
printPerson(myPerson)

console.log(typeof myPerson)
console.log(typeof printPerson)


type User = {
    name: string;
    age: number;
    location: string;
}

const printUserInfo = (user: User) => {
    return `Name: (${user.name}), Age: (${user.age}), Location: (${user.location}) `
}

const result = printUserInfo({ name: 'John', age: 20, location: 'usa' })
console.log(result)