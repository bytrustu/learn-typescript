function isPerson(x: Person | Product): x is Person {
    return (x as Person).age !== undefined;
}

function print4(value: Person | Product) {
    if (isPerson(value)) {
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}

function print5(value: Person | Product) {
    if ('age' in value) {
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}