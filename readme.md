### Type Annotations


### Type Inference
TI - feature in TS that allows the complier to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, TS will try to infer the type based on the value you assign to it.

### Type Any
TS has a special any type that can be used to represent any type. When a variable is annotated with the any type, TS will allow it to have any value and disable all type checking for that variable and its properties.

Harmful. Harder to catch type related bugs during development.