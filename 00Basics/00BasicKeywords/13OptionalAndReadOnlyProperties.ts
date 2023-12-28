// 13 Optional Properties
// You can make a certain property optional in an object type by adding a question mark (?) after the property name.
// For eg, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property optional. You can do this by adding a question marka after the email property:

type Person = {
    name: string;
    age: number;
    email?: string;
}
type Person2 = {
    name: string;
    age: number;
    email?: string;
    readonly location: string
}

const alex: Person = { name: "Alex", age: 30 }
const john: Person = {name: 'John', age: 33, email: 'john@ex.com'}
const john2: Person2 = {name: 'John', age: 33, email: 'john@ex.com', location: 'china'}
const john3: Person2 = {name: 'John', age: 33, email: 'john@ex.com'}