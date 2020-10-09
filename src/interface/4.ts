interface Person4 {
    readonly name: string;
    age: number;
    [key: string]: string | number;
}

const s1: Person4 = {
    name: 'joon',
    age: 22,
    birthday: '2020-01-01'
}

console.log(s1);