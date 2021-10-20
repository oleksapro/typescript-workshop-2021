export {};

/**
 * typeof type guards
 */

function printAll(arg: string | number | string[]): string {
    if (typeof arg === "number") {
        return arg.toString();
    } else if (typeof arg === "object") {
        return arg.join("");
    } else {
        return arg;
    }
}
