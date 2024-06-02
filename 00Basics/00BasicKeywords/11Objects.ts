// 11 Objects
// An object in TS is a structured data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type alias. TS uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.



// type varName ( annotations/types) = {property: value}


const person: { firstName: string; lastName: string; age: number } = {
    firstName: 'john',
    lastName: 'wick',
    age: 30,
}
console.log(person)

// Objects as function return value
function printUsr(): { name: string; age: number; location: string } {
    return {
        name: 'Alex',
        age: 20,
        location: 'US'
    }
}
console.log(printUsr())