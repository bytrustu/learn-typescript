type Readonly1<T> = { readonly [P in keyof T]: T[P] }
type Partial1<T> = { [P in keyof T]?: T[P] }

type g1 = Readonly1<Person>;
type g2 = Partial1<Person>;