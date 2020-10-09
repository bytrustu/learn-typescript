interface Param {
    name: string;
    age?: number;
    language?: string;
}


function getText5({
      name,
      age = 15,
      language,
  }: Param): string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}

const t1 = getText5({name: 'aaa', age: 11, language: ''});
const t2 = getText5({name: 'aaa'});
console.log(t1, t2);