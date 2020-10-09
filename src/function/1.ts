function getText(name: string, age: number): string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}`;
}

const getText2: (name: string, age: number) => string = function (name, age) {
    return '';
}

function getText3(name: string, age: number = 15, language?: string): string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    const languageText = language ? language.substr(0, 10) : '';
    return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}

function getText4(name: string, ...rest: number[]): string {
    return '';
}