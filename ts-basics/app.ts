//basics
let str1 = "string";
let num1: number = 123;
let bool1: boolean = true;
let big1: bigint = 100n;

// union types
let unionType: string | number
unionType = "union type"
unionType = 5

// collection
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
// tuple
const tuple1: [string, number, ...boolean[]] = ["asdf", 2, false]
// tuple1[0] = "asdf"
// tuple1[1] = 23
// tuple1[1001] = true
// tuple1[1002] = "true"


//type aliases
type stringNull = string | null;

let var11: stringNull = "aliases"
var11 = null

//enum
const enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

let dir1: Direction
dir1 = Direction.Left

//function types/
type PrintItType = (v: string) => void;
let printIt: PrintItType
printIt = (value) => console.log(value)

// interface
interface Point {
    readonly x: number;
    y?: number;
    z: number
}

interface SuperPoint extends Point {
    w: number
}


let point1: SuperPoint;
point1 = {
    x: 1,
    // y: 3,
    z: 2,
    w: 55
}

// point1.x = 11
point1.y = 33
point1.z = 22
point1.w = -55
