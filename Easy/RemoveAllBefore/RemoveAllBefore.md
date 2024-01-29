Remove All Before

Not all of the elements are important. What you need to do here is to remove from the sequence all of the elements before the given one.


For the illustration we have a sequence [1, 2, 3, 4, 5] and we need to remove all elements that go before 3 - which are 1 and 2.

We have two edge cases here: (1) if a cutting element cannot be found, then the sequence shoudn't be changed. (2) if the sequence is empty, then it should remain empty.

Input: Array and the border element.

Output: Array.

Examples:

assert.deepStrictEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
assert.deepStrictEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
assert.deepStrictEqual(
    removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2),
    [2, 4, 2, 3, 4]
);
assert.deepStrictEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);