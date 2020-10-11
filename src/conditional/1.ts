type IsStringType<T> = T extends string ? 'yes' : 'no';
type J1 = IsStringType<string | number>;
type J2 = IsStringType<string> | IsStringType<number>;

type Array2<T> = Array<T>;
type J3 = Array2<string | number>;