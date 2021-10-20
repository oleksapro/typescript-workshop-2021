// @ts-nocheck

interface Pet {
    name: string;
}

class Dog {
    name: string;
}

let pet: Pet;

// OK, because of structural typing
pet = new Dog();

export {};
