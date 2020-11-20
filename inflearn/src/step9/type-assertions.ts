const div = document.querySelector('div') as HTMLDivElement;
div.innerText;

interface Q1 {
    name: string;
    skill: string;
}

interface Q2 {
    name: string;
    age: number;
}

function introduce(): Q1 | Q2 {
    return { name: 'by', age: 11, skill: '????' }
}

const aa = introduce();

console.log((aa as Q1).skill);

function isDeveloper(target: Q1 | Q2): target is Q1 {
    return (target as Q1).skill !== undefined;
}

if (isDeveloper(aa)) {

} else {

}