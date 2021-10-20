type TodoPartial = Partial<{
    title: string;
    description: string;
}>;

type TodoRequired = Required<{
    title?: string;
    description?: string;
}>;

type RecordRecord = Record<"name", string>;

type PickName = Pick<{ name: string, age: number }, "name">;

type SParameters = Parameters<(s: string) => void>;

type ReturnTypeString = ReturnType<() => string>;
