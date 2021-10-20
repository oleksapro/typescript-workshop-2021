// Control Flow Analysis of Aliased Conditions and Discriminants

function foo(arg: unknown) {
    if (typeof arg === "string") {
      console.log(arg.toUpperCase());
    }
}

// In TS 4.3 and below
function fooBelow4_3(arg: unknown) {
    const argIsString = typeof arg === "string";

    if (argIsString) {
      console.log(arg.toUpperCase());
      //              ~~~~~~~~~~~
      // Error! Property 'toUpperCase' does not exist on type 'unknown'.
    }
}
