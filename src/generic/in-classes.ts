export {};

/**
 * Generic Classes
 */

class GenericNumber<NumType> {
    zeroValue: NumType | undefined;
    add: ((x: NumType, y: NumType) => NumType) | undefined;
}

let myGenericClass = new GenericNumber<number>();
