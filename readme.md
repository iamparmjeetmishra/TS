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

### 12 Type Aliases
A type Alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.
Type aliases are defined using the type keyword, followed by the name of the alias, an equal sign (=), and the type it refers to.


### 13 Optional and ReadOnly Properties
You can make a certain property optional in an object type by adding a question mark (?) after the property name.
For eg, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property optional. You can do this by adding a question marka after the email property.

##### ReadOnly Properties


### 14 Intersection Types
An intersection type is a way to combine multiple types into a sinlge type that includes all the properties and methods of each constituent type. An intersection type is denoted by the & symbol


### 15 Unions
Unions are use to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or param to accep multiple types.
//The Syntax for defining a union type in TS uses the pipe symbol . "|"

### 16 Literal Types
LT allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.

### 16 Tuples
// Tuples is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequence with know lengths.

### 18 Enums
// Enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.

### 19 Class Properties Annotations
// we can annotate class properties with a type. This allows you to define the data type of the proeprty and ensure that it is always consistent.


### 20 Access Modifiers
In TS, we can use access modifiers to control the visibility of class members ( properties and methods). Access Modifiers determine the way in which class members can be accessed from within and outside the class.

There are three types of access modifiers in TS
- Public: accessible from anywhere (default)
- Private: 
- Protected

### 21 Getters & setters
 Getter & setter are used to access and modify class properties. It allows you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

 ### 22 Interface
Interface is a way to define a contact for the shape of an object. It specifies the properties and their types that an object must have. Interfaces are a powerful tool for enforcing a certain structure in your code.

While Interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TS can also be used to describe the shape of functions and classes.


###  23 Declaration Merging
Once an interface is declared, it cannot be directly modified. However, TS allows what is informally referred to as 'declaration mergin' or 'interface extension', which is often misconstrued as 're-opening'.

Declaration mergin in TS refers to the ability to extend or augment an existing declaration, including interfaces. This can be useful when you want to add new properties or methods to an existing interface without modifying the orignal declaration.

### 24 Generics
In TS, generics allow you to create reusable components that cna work with a variety of types. Generics make it possible for you to define function, classes, and interfaces that can work with different data types without having to duplicate code.


### 25 Type Narrowing
Type Narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code.

TS Provides several mechanisms for narrowing types
- 1) Type guards
- 2) The instance of operator
- 3) Intersection types

Type guards
- Type Guard are mechanisms that help TS understand and narrow down the types more precisely. One common type guard is the typeof operator