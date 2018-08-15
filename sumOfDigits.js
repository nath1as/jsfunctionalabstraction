function sum(num) {
  return String(num).split('').map(function (digit) {
    return Number(digit);
  }).reduce(function (sum, digit) {
    return sum + digit;
  });
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

