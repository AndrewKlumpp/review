function uncompress(str) {
  let decompressed = '';
  for (let i = 1; i < str.length; i += 2) {
    let num = Number(str[i]);
    let char = str[i - 1];
    for (let j = 0; j < num; j++) {
      decompressed += char;
    }
  }
  return decompressed;
};




console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
