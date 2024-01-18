import assert from "assert";

function removeMinMax(data: Set<number>, total: number): Set<number> {
    // your code here
    let arrayConjunto = Array.from(data);

  // Ordena el array de forma ascendente
  arrayConjunto.sort((a, b) => a - b);

  // Elimina los elementos mínimos y máximos según la cantidad especificada
  arrayConjunto = arrayConjunto.slice(total, arrayConjunto.length - total);

  // Convierte el array resultante de nuevo a un conjunto
  return new Set(arrayConjunto);
}

console.log("Example:");
console.log(removeMinMax(new Set([8, 9, 18, 7]), 1));

// These "asserts" are used for self-checking
assert.deepStrictEqual(
    removeMinMax(new Set([8, 9, 18, 7]), 1),
    new Set([8, 9])
);
assert.deepStrictEqual(removeMinMax(new Set([8, 9, 7]), 0), new Set([8, 9, 7]));
assert.deepStrictEqual(removeMinMax(new Set([8, 9, 7]), 2), new Set([]));
assert.deepStrictEqual(removeMinMax(new Set([1, 2, 7, 8, 9]), 2), new Set([7]));
assert.deepStrictEqual(removeMinMax(new Set([]), 1), new Set([]));