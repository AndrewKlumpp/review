function hipsterfy(sentence) {
  let words = sentence.split(' ');
  let hipstered = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    hipstered.push(removeLastVowel(word));
  }
  return hipstered.join(' ');
};

function removeLastVowel(word) {

  let vowels = 'aeiou';
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    if (vowels.includes(letter)) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word;
};

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
