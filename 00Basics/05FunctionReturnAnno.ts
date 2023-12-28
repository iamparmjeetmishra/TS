// Return Annotations (regular)

// Regular func
function double1(x: number): number {
    return x * x;
}

const res = double1(2)
console.log(res)

// Return annotations (arrow)

const double2 = (x: number): number => x * x;
const res2 = double2(3)
console.log(res2)