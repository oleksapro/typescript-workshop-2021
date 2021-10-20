export {};

/**
 * indexed access types
 */

type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type I1 = Person["age" | "name"];
// ||
// \/
type I2 = Person[keyof Person];

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
   
type Person1 = typeof MyArray[number];
