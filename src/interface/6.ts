interface GetText9 {
    (name: string, age: number): string;
    totalCall?: number;
}

const getText9: GetText9 = function (name, age) {
    if (getText9.totalCall !== undefined) {
        getText9.totalCall += 1;
        console.log(`totalCall: ${getText9.totalCall}`);
    }
    return '';
}

getText9.totalCall = 0;
getText9('', 0);
getText9('', 0);