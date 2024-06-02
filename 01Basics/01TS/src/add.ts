
// function add(a: number, b: number) {
//    return a + b
// }

// console.log(add(11, 100))

// Literal Types

type Hello = 'Hello'

const text: Hello = 'Hello'

// Const assertions

const user = {
   age: 35,
   name: 'John'
} as const

// user.name = 'wick' // cannot assign error

