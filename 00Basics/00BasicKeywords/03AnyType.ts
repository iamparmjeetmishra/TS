//TS has a special any type that can be used to represent any type. When a variable is annotated with the any type, TS will allow it to have any value and disable all type checking for that variable and its properties.

let color: any = 'red'
color = 20;
color = true;
color()
console.log(color)