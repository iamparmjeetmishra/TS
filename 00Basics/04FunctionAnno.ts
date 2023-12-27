// Function Parameters Annotations
// Function Parameter annotations in TS are used to specify the expected types of the parameters that a function takes.

// Regular Func
function addOne(num: number) {
    return num + 1
}

const result = addOne(3)
console.log(`Result: ${result}`)

// Arrow Func Anno
const double = (x: number, y: number) => x * y
const res = double(3, 3)
// const res = double(3)
// TS will gives you warnng if we provide more or less arguments then you specify in our params areas

console.log(`Res2: ${res}`)