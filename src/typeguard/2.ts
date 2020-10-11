function print2(value: Person | Product) {
    console.log(value.name);
    if (value instanceof Person) {
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}
