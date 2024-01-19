import assert from "assert";

function missingNumber(items: number[]): number {
    // Sort the array in ascending order
    items.sort((a, b) => a - b);

    // Find the common difference between elements
    const commonDifference = (items[items.length - 1] - items[0]) / items.length;

    // Iterate through the array to find the missing element
    for (let i = 1; i < items.length; i++) {
        if (items[i] - items[i - 1] !== commonDifference) {
            return items[i - 1] + commonDifference;
        }
    }
        // If no missing element is found

    return null;
}

console.log("Example:");
console.log(missingNumber([1, 4, 2, 5]));

// These "asserts" are used for self-checking
assert.strictEqual(missingNumber([1, 4, 2, 5]), 3);
assert.strictEqual(missingNumber([2, 6, 8]), 4);