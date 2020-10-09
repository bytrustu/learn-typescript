type Pick1<T, K extends keyof T> = { [P in K]: T[P] }

type T3 = Pick1<Person, 'name' | 'age'>;