interface Dropdown<T> {
    value: T;
    title: string;
}

const shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

const detailedItem: DetailDropdown<number> = {
    description: "",
    tag: 0,
    title: "",
    value: 0
}