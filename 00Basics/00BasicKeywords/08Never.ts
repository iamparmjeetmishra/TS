// Never in TS
// The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile time instead of runtime

// Use Cases
// 1) function that always throws an error
// 2) function that has an infinite loop
// 3) variable that can never have a value

function throwErr(msg: string): never {
    throw new Error(msg)
}
// throwErr('hi')

function infiniteLoop(): never {
    while (true) {}
}

let x: never;
function neverReturns(): never {
    while (true) {}
}
// x = neverReturns() // compile time error because the function never returns