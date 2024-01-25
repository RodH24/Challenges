Even The Last

You are given array of integers (number). You should find the sum of the elements with even indexes (0th, 2nd, 4th...). Then multiply this summed number and the final element of the array together. Don't forget that the first element has an index of 0.

For an empty array, the result will always be 0 (zero).


Input: Array of integers (number).

Output: An integer (number).

Examples:

assert.strictEqual(evenLast([0, 1, 2, 3, 4, 5]), 30);
assert.strictEqual(evenLast([1, 3, 5]), 30);
assert.strictEqual(evenLast([6]), 36);
assert.strictEqual(evenLast([]), 0);
1
2
3
4
How it is used: Indexes and slices are important elements of coding. This will come in handy down the road!

Preconditions: 0 ≤ len(array) ≤ 20
all(isinstance(x, int) for x in array)
all(-100 < x < 100 for x in array)