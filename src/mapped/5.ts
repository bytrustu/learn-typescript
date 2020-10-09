type Record1<K extends string, T> = { [P in K]: T };
type T4 = Record1<'p1' | 'p2', Person>;