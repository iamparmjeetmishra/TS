


function greet(person: string = 'Anon') {
    return `Hello ${person}`
}

const res = greet()
console.log(res)

let res2 = greet("wick")
console.log(res2)