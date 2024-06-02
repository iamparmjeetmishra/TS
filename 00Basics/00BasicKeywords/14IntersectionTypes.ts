// 14 Intersection Types
// An intersection type is a way to combine multiple types into a sinlge type that includes all the properties and methods of each constituent type. An intersection type is denoted by the & symbol

//1st
type Person = {
    name: string;
    age: number;
}

type Employee = {
    id: number;
    title: string;
}

//2nd
type PersonAndEmployee = Person & Employee

//3rd 
const alice: PersonAndEmployee = {
    name: 'Alice',
    age: 33,
    id: 123,
    title: 'Manager'
}