function filterArray(numbers, value) {
  const elements = [];

  for (let index = 0; index < nambers.length; index += 1) {
    const element = numbers[index];

    if (element > value) {
      elements.push(element);
    }
  }
  return elements;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
