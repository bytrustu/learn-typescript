enum Shoes {
    Nike = 'NIKE',
    Adidas = 'ADIDAS',
}

const myShoes = Shoes.Adidas;
console.log(myShoes)

enum Answer {
    YES = 'Y',
    NO = 'N'
}

function askQuestion(answer: Answer): void {
    if (answer === Answer.YES) {
        console.log('YES')
    }
    if (answer === Answer.NO) {
        console.log('NO')
    }
}

askQuestion(Answer.YES);