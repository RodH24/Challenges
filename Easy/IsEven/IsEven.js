import assert from "assert";

function isEven(num: number): boolean {
    // your code here
    if(num % 2 === 0)
    return true;
    else
        return false;
}

console.log("Example:");
console.log(isEven(2));

// These "asserts" are used for self-checking
assert.strictEqual(isEven(2), true);
assert.strictEqual(isEven(5), false);
assert.strictEqual(isEven(0), true);

console.log("Coding complete? Click 'Check Solution' to earn rewards!");
