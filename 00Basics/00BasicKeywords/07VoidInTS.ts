// Void in TS
// Void is a type that represents that absence of any value. It is often used as the return type for functions that do not return a value.

function printMsg(msg: string): void {
    console.log(`This is my msg: ${msg}`)
    // error
    // if return msg then it would be string 
}

printMsg('Hello John')