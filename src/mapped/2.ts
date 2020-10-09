interface Human1 {
    name: string;
    age: number;
}

type MakeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: MakeBoolean<Human1> = {};
pMap.name = true;
pMap.age = false;
