function fizzBuzz(max) {
  let output = [];
  for (let i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      output.push(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      output.push(i);
    }
  }
  return output;
};




console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
