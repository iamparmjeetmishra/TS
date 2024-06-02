// 24 Generics
// In TS, generics allow you to create reusable components that cna work with a variety of types. Generics make it possible for you to define function, classes, and interfaces that can work with different data types without having to duplicate code.

// Not like any

// Regular func

const printString = (x: string) => console.log(x)
const printNumber = (x: number) => console.log(x)
const printBoolean = (x: boolean) => console.log(x)

console.log(printString('Hello'))
console.log(printNumber(2))
console.log(printBoolean(true))

// Generics functions
console.log('Generics functions')


// <T> Type functions

function printInfo<T>(x: T): T {
    return x
}

const str = printInfo<string>('Hello')
const num = printInfo<number>(2)
const bool = printInfo<boolean>(true)


// Usage

function printNumber2(item: number, defaultValue : number): [number, number] {
    return [item, defaultValue]
}

const num2 = printNumber2(12, 22)
console.log(num2)

// Generics

function uniqueDataTypesFunc<Type>(item: Type, defaultValue: Type): [Type, Type] {
return [item, defaultValue]
}

const res = uniqueDataTypesFunc<number>(10, 20)
console.log(res)

const str2 = uniqueDataTypesFunc<string>('he', 'dd')
console.log(str2) 


interface Dog {
    name: string;
    breed: string;
}

const dog1 = uniqueDataTypesFunc<Dog>(
    { name: 'Bud', breed: 'Puggle' },
    {name: 'Max', breed: 'Lab'}
)

console.log(dog1)

// Array
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item))
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const eveNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0)
console.log(eveNumbers)