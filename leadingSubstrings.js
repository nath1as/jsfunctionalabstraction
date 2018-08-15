function substringsAtStart(string) {
  var array = string.split('');
  return array.map(function (num, idx) {
    return array.slice(0, idx + 1).join(' ');
  }); 
}

// function substringsAtStart(string) {
//   return string.split('').map(function (char, idx, stringArray) {
//     return stringArray.slice(0, idx + 1).join('');
//   });
// }


console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

