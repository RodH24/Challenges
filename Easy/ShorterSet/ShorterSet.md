Shorter Set

In a given set of integers, you need to remove minimum and maximum elements.

The second argument tells how many min and max elements should be removed.

Input: Two arguments. Set of ints and int.

Output: Set of ints

Example:

assert.deepStrictEqual(
    removeMinMax(new Set([8, 9, 18, 7]), 1),
    new Set([8, 9])
);
assert.deepStrictEqual(removeMinMax(new Set([8, 9, 7]), 0), new Set([8, 9, 7]));
assert.deepStrictEqual(removeMinMax(new Set([8, 9, 7]), 2), new Set([]));
assert.deepStrictEqual(removeMinMax(new Set([1, 2, 7, 8, 9]), 2), new Set([7]));
1
2
3
4
5
6
7
How it’s used: (math is used everywhere)

Precondition: ints in the set is between -1000 and 1000; the second argument is between -1000 and 1000