export {};

/**
 * typeof type operator
 */

function f() {
   return { x: 10, y: 3 };
}

type Type = ReturnType<typeof f>;
