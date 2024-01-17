import assert from "assert";

function median(data: number[]): number {
    // add your code here
    data.sort((a,b) => a - b);
    
    const middleIndex = Math.floor(data.length / 2);
    
    if(data.length % 2 === 0){
    return (data[middleIndex - 1] + data[middleIndex])/ 2;
    } else {
    return data[middleIndex];
    }
}

console.log("Example:");
console.log(median([1, 2, 3, 4, 5]));

// These "asserts" are used for self-checking
assert.strictEqual(median([1, 2, 3, 4, 5]), 3);
assert.strictEqual(median([3, 1, 2, 5, 3]), 3);
assert.strictEqual(median([1, 300, 2, 200, 1]), 2);
assert.strictEqual(median([3, 6, 20, 99, 10, 15]), 12.5);
assert.strictEqual(median([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 5);
assert.strictEqual(median([0, 7, 1, 8, 4, 9, 5, 6, 2, 3]), 4.5);
assert.strictEqual(median([33, 56, 62]), 56);
assert.strictEqual(median([21, 56, 84, 82, 52, 9]), 54);
assert.strictEqual(median([100, 1, 1, 1, 1, 1, 1]), 1);
assert.strictEqual(median([64, 6, 92, 7, 70, 5]), 35.5);