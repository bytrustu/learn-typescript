interface Person2 {
    readonly name: string,
    age?: number;
}

const p2: Person2 = { name: 'mike' }
p2.name = 'ha';
