function getText5(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 15 : _b, language = _a.language;
    var nameText = name.substr(0, 10);
    var ageText = age >= 35 ? 'senior' : 'junior';
    return "name: " + nameText + ", age: " + ageText + ", language: " + language;
}
var t1 = getText5({ name: 'aaa', age: 11, language: '' });
var t2 = getText5({ name: 'aaa' });
console.log(t1, t2);
