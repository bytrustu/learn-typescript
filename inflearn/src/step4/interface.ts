interface User {
    age: number;
    name: string;
}

const joon: User = {
    age: 10,
    name: 'joon',
}

interface SumFunction {
    (a: number, b: number): number;
}

const sum: SumFunction = (a, b) => a + b;
console.log(sum(1, 2));

interface StringArray {
    [index: number]: string;
}

const q: StringArray = ['a', 'b', 'c'];

interface StringRegexDictionary {
    [key: string]: RegExp;
}

const obj1: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}


interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

const by: Developer = {
    age: 0, language: "", name: "", isYoungerThan(age: number): boolean {
        return false;
    }
}
