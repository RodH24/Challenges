import assert from "assert";

function splitList(values: number[]): number[][] {
    // your code here
    const longitud = values.length;
    if (longitud === 0){
    return [[], []];
    }
    const mitad = Math.ceil(longitud / 2);

    const primeraMatriz = values.slice(0, mitad);
    const segundaMatriz = values.slice(mitad);

    return [primeraMatriz, segundaMatriz];
}

console.log("Example:");
console.log(JSON.stringify(splitList([1, 2, 3, 4, 5, 6])));

// These "asserts" are used for self-checking
assert.deepStrictEqual(splitList([1, 2, 3, 4, 5, 6]), [
    [1, 2, 3],
    [4, 5, 6],
]);
assert.deepStrictEqual(splitList([1, 2, 3]), [[1, 2], [3]]);
assert.deepStrictEqual(
    splitList(["banana", "apple", "orange", "cherry", "watermelon"]),
    [
        ["banana", "apple", "orange"],
        ["cherry", "watermelon"],
    ]
);
assert.deepStrictEqual(splitList([1]), [[1], []]);
assert.deepStrictEqual(splitList([]), [[], []]);