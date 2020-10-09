interface Person3 {
    readonly name: string;
    age?: number
}

const p3 = {
    name: 'mike',
    birthday: '1999-01-01'
}
const p4: Person3 = p3;
console.log(p4)