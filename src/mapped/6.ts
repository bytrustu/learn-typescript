enum Fruits {
    Apple,
    Banana,
    Orange
}

const FRUIT_PRICE: { [key in Fruits]: number} = {
    [Fruits.Apple]: 1000,
    [Fruits.Banana]: 2000,
    [Fruits.Orange]: 3000
}