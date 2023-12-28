### 01 Type Annotations


### 02 Type Inference
TI - feature in TS that allows the complier to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, TS will try to infer the type based on the value you assign to it.

### 03 Type Any
TS has a special any type that can be used to represent any type. When a variable is annotated with the any type, TS will allow it to have any value and disable all type checking for that variable and its properties.

Harmful. Harder to catch type related bugs during development.

### 04 Function Parameters Annotations
Function Parameter annotations in TS are used to specify the expected types of the parameters that a function takes.


### 06 Function Return Anno


### 07 Void in TS
Void is a type that represents that absence of any value. It is often used as the return type for functions that do not return a value.

### 08 Never in TS
The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile time instead of runtime

###### // Use Cases
1) function that always throws an error
2) function that has an infinite loop
3) variable that can never have a value

---

### 09 Arrays Types
Arrays are a type of object that can store multiple values of the same data type. Arrays in TS are typed, which means you can specify the type of values that an array can hold.

###### // Two Types
1) Using the square bracket notation [] to indicate an array of a specific type
2) Using the generic Array<type> notation to indicate an array of a specific type


### 10 Multi Dimensional Array
It is an array that contains other arrays as its elements. It can be defined using the same notation as one dimensional arrays, but with nested square brackets


### 11 Objects
An object in TS is a structured data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type alias. TS uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.