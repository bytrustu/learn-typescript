interface Person {
    name: string;
    age: number;
    isYoungerThan(age: number): boolean;
}

interface Programmer {
    favoriteProgrammingLanguage: string;
}

interface Korean extends Person, Programmer {
    isLiveInSeoul: boolean;
}

interface Product {
    name: string;
    price: number;
}

type PP = Person & Product;

class SomePerson implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    isYoungerThan(age: number): boolean {
        return this.age < age;
    }
}