function filterArray(numbers, value) {
  const numbersList = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      numbersList.push(numbers[i]);
    }
  }
  return numbersList;
}

function filterArray2(numbers, value) {
  const numbersList = [];
  for (const num of numbers) {
    if (num > value) {
      numbersList.push(num);
    }
  }
  return numbersList;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

console.log(filterArray2([1, 2, 3, 4, 5], 3));
console.log(filterArray2([1, 2, 3, 4, 5], 4));
console.log(filterArray2([1, 2, 3, 4, 5], 5));
console.log(filterArray2([12, 24, 8, 41, 76], 38));
console.log(filterArray2([12, 24, 8, 41, 76], 20));
