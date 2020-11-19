class PersonClass {
    private name: string;
    public age: number;
    readonly log: string | undefined;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}