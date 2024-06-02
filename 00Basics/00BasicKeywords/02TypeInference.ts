// TI - feature in TS that allows the complier to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, TS will try to infer the type based on the value you assign to it.

// Eg
let tech = 'TS'
let favNum = 8
let tsHard = false;

console.log(tech, favNum, tsHard)

// Error
// tech = false
// favNum = 'Hello'
// tsHard = 20