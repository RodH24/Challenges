import assert from "assert";

function allTheSame(elements: any[]): boolean {
    // your code here
      for (let i = 1; i < elements.length; i++) {
    if (elements[i] !== elements[0]) {
      return false; // Si un elemento no es igual al primero, retorna falso
    }
  }
  return true; // Si todos los elementos son iguales, retorna verdadero

}

console.log("Example:");
console.log(allTheSame([1, 1, 1]));

// These "asserts" are used for self-checking
assert.strictEqual(allTheSame([1, 1, 1]), true);
assert.strictEqual(allTheSame([1, 2, 1]), false);
assert.strictEqual(allTheSame([1, "a", 1]), false);
assert.strictEqual(allTheSame([1, 1, 1, 2]), false);
assert.strictEqual(allTheSame([]), true);
assert.strictEqual(allTheSame([1]), true);