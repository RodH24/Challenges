import assert from "assert";

function mostFrequent(data: string[]): string {
    // your code here
      const countMap = {};

  data.forEach((str) => {
    countMap[str] = (countMap[str] || 0) + 1;
  });

  // Find the string with the highest count
  let mostFrequentString;
  let highestCount = 0;

  for (const str in countMap) {
    if (countMap[str] > highestCount) {
      mostFrequentString = str;
      highestCount = countMap[str];
    }
  }

  return mostFrequentString;
}

console.log("Example:");
console.log(mostFrequent(["a", "b", "c", "a", "b", "a"]));

// These "asserts" are used for self-checking
assert.strictEqual(mostFrequent(["a", "b", "c", "a", "b", "a"]), "a");
assert.strictEqual(mostFrequent(["a", "a", "bi", "bi", "bi"]), "bi");