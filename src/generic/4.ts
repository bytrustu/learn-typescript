interface Human {
    name: string,
    age: number
}

interface Korea extends Human {
    liveInBusan : boolean;
}

function swapProperty<T extends Human, K extends keyof Human>(
    p1: T,
    p2: T,
    key: K
): void {
    const temp = p1[key];
    p1[key] = p2[key];
    p2[key] = temp;
}

const ss1: Korea = {
    name: '홍길동',
    age: 23,
    liveInBusan: false
}

const ss2: Korea = {
    name: '김삿갓',
    age: 31,
    liveInBusan: true
}

swapProperty(ss1, ss2, 'age');


