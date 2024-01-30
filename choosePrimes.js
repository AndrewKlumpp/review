function choosePrimes(nums) {
  let primes = [];
  for (let i = 0; i < nums.length; i++) {
    num = nums[i];
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
};

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  } return true;
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
