export {};

/**
 * type predicates
 */
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
const pet: Fish | Bird = {
    swim: () => {}
};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function isBird(pet: Fish | Bird): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

if (isFish(pet)) {
    pet.swim();
}

// pet.fly();

if(isBird(pet)) {
    pet.fly();
}
