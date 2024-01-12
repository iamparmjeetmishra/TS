// 23 Declaration Merging
// Once an interface is declared, it cannot be directly modified. However, TS allows what is informally referred to as 'declaration mergin' or 'interface extension', which is often misconstrued as 're-opening'.
// Declaration mergin in TS refers to the ability to extend or augment an existing declaration, including interfaces. This can be useful when you want to add new properties or methods to an existing interface without modifying the orignal declaration.

// Original declaration
interface Car {
    brand: string;
    start(): void;
}
// Declartion mergin ( interface extension)
interface Car {
    model: string;
    stop(): void;
}

// Usage
const myCar: Car = {
    brand: 'Toyota',
    model: 'Camry',
    start() {
        console.log(`Car Started`)
    },
    stop() {
        console.log(`'Car Stopped`)
    }
}
console.log(myCar.model)