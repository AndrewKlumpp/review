function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    sum += num;
  }
  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
