interface Q3 {
    name: string;
    skill: string;
}

interface Q4 {
    name: string;
    skill: string;
}

class Q5 {
    name: string;
    skill: string;
}

let Developer: Q1;
let p5: Q4;

Developer = new Q5();


interface Empty<T> {

}

interface notEmpty<T> {
    data: T;
}

let empty1: Empty<string>;
let empty2: Empty<number>;

// empty1 = empty2;
empty2 = empty1;