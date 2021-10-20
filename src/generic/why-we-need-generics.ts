/**
 * Why we need generics
 */

function identityNum(arg: number): number {
    return arg;
}

const num = identityNum(10);

function identityAny(arg: any): any {
    return arg;
}

const iDoNotKnowType = identityAny("hello");

function identityGen<Type>(arg: Type): Type {
    return arg;
}

const iKnowType = identityGen({ name: "John" });

iKnowType.name
