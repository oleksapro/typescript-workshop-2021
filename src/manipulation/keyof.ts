export {};

/**
 * keyof type operator
 */

type Point = { x: number; y: number };
type P = keyof Point;

const point: Point = { x: 1, y: 2 }

const key: P = "x";

console.log(point[key])
