export {};

/**
 * Generic in interfaces
 */

interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}
   
function identity<Type>(arg: Type): Type {
    return arg;
}
   
let myIdentity: GenericIdentityFn = identity;
