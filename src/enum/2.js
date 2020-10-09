"use strict";
exports.__esModule = true;
exports.getIsValidEnumValue = void 0;
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(function (key) { return isNaN(Number(key)); })
        .some(function (key) { return enumObject[key] === value; });
}
exports.getIsValidEnumValue = getIsValidEnumValue;
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
    Language["Japanese"] = "jp";
})(Language || (Language = {}));
console.log("1 in Fruit : " + getIsValidEnumValue(Fruit, 1));
console.log("5 in Fruit : " + getIsValidEnumValue(Fruit, 5));
console.log("Orange in Fruit : " + getIsValidEnumValue(Fruit, 'Orange'));
console.log("ko in Language : " + getIsValidEnumValue(Language, 'ko'));
console.log("Korean in Language : " + getIsValidEnumValue(Language, 'Korean'));
