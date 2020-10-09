const enum Fruit1 {
    Appele,
    Banana = 5,
    Orange
}

const enum Language1 {
    Korean = 'ko',
    English = 'en',
    Japanese = 'jp'
}

const fruit3: Fruit1 = Fruit1.Appele;
const language3: Language1 = Language1.English;
console.log(fruit3)
console.log(language3)