export {};

/**
 * Mapped
 */

type OnlyBoolsAndHorses = {
    [key: string]: boolean;
};

const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false,
};

/**
 * Mapped types with generic
 */

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
  };
   
type FeatureOptions = OptionsFlags<FeatureFlags>;

/**
 * Remove readonly
 */

type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
    readonly id: string;
    readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

/**
 * Remove optional
 */

type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};
   
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};
   
type User = Concrete<MaybeUser>;
