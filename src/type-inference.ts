const func = (num: number) => `$${num}`;

const funcV2 = (num?: number) => num ? `$${num}` : num; // => undefined

// ||
// ||
// ||
// \/

const funcBetter = (num: number): string => `$${num}`;

const funcBetterV2 = (num?: number): string => num ? `$${num}` : ""; // => ""

export {};
