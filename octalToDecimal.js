function octalToDecimal(numberString) {
  var digits = numberString.split('');
  var conversion = digits.map(function (digit, index) {
    return Number(digit) * Math.pow(8, numberString.length - index - 1);
  });
  return conversion.reduce(function (sum, num) {
    return sum + num;
  });
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

