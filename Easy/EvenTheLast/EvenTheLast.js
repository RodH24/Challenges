import assert from "assert";

function evenLast(data: number[]): number {
    // your code here
    if (data.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < data.length; i += 2) {
        sum += data[i];
    }

    return sum * data[data.length - 1];}

console.log("Example:");
console.log(evenLast([0, 1, 2, 3, 4, 5]));

// These "asserts" are used for self-checking
assert.strictEqual(evenLast([0, 1, 2, 3, 4, 5]), 30);
assert.strictEqual(evenLast([1, 3, 5]), 30);
assert.strictEqual(evenLast([6]), 36);
assert.strictEqual(evenLast([]), 0);