// 15 Unnions
// Unions are use to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or param to accep multiple types.
//The Syntax for defining a union type in TS uses the pipe symbol . "|"

let myVar: number | string;

// let password: string | number = true // Error
let password: string | number = 20

type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

let user: UserInfo | AccountDetails = {
    first: 'John',
    last: 'Doe',
    age: 20,
    email: 'test@gmail.com'
 }