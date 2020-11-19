function logText<T>(text: T): T {
    console.log(text)
    return text;
}

const result = logText<string>('하이');
result.split('');
const isSuccess = logText<boolean>(false);
isSuccess.valueOf();

interface DropDownItem<T> {
    value: T;
    selected: boolean;
}

const email: DropDownItem<string>[] = [
    {value: 'naver.com', selected: true},
    {value: 'naver.com', selected: true},
    {value: 'naver.com', selected: true},
    {value: 'naver.com', selected: true},
];

const numberOfProduct: DropDownItem<number>[] = [
    {value: 1, selected: true},
    {value: 1, selected: true},
    {value: 1, selected: true},
    {value: 1, selected: true},
];
//
// function createDropdownItem(
//     item: DropDownItem<number> | DropDownItem<string>
// ) {
//     const option = document.createElement('option');
//     option.value = item.value.toString();
//     option.innerText = item.value.toString();
//     option.selected = item.selected;
//     return option;
// }
//
// email.forEach(email => {
//     const item = createDropdownItem(email);
// })
//
// numberOfProduct.forEach(product => {
//     const item = createDropdownItem(product);
// })

// const logTextLength = <T>(text: T[]):T[] => {
//     console.log(text.length);
//     text.forEach(t => {
//         console.log(t);
//     })
//     return text;
// }
//
// logTextLength<string | number>(['hi', 'hello', 223]);


interface LengthType {
    length: number;
}

const logTextLength = <T extends LengthType>(text: T): T => {
    console.log(text.length);
    return text;
}
logTextLength('a');
logTextLength({length: 10});

interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption('name')