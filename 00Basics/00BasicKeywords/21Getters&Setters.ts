// 21 Getters & setters
// Getter & setter are used to access and modify class properties. It allows you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number {
        return this._myProperty;
    }
    set myProperty(value: number) {
        if (value < 0) {
            throw new Error('Value cannot be negative')
        }
        this._myProperty = value;
    }

}

const myInstance = new MyClass();

console.log(`first instance: ${myInstance.myProperty}`);


myInstance.myProperty = 20;

console.log(`Current instance: ${myInstance.myProperty}`);