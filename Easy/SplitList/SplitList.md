Split List
You have to split a given Array into two Arrays inside an Array. If input sequence has an odd amount of elements, then the first Array inside result Array should have more elements. If input sequence has no elements, then two empty Arrays inside result Array should be returned.

Input: An Array.

Output: An Array of two Arrays.

Examples:

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