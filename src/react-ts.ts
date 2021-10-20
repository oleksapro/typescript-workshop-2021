import { FC, ReactElement } from "react";

interface Props {};

const User: FC<Props> = () => null;

function UserFunc(props: Props): ReactElement | null {
    return null;
};

interface PropsWithGeneric<Type> {
    user: Type;
};

const UserWithGeneric = <Type extends any>(props: PropsWithGeneric<Type>): ReactElement | null => null;

function UserFuncWithGeneric<Type>(props: PropsWithGeneric<Type>): ReactElement | null {
    return null;
}
