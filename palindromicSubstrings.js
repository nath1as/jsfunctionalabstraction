function palindromes(string) {
  return substrings(string).filter(palindrome);
}

function palindrome(string) {
  if (string.split('').length > 1) {
    return string.split('').reverse().join('') === string;
  } else {
    return false;
  }
}

function substrings(string) {
  return string.split('').map(function (char, idx) {
    return substringsAtStart(string.substring(idx));
  }).reduce(function (result, array) {
    return result.concat(array);
  });
}

function substringsAtStart(string) {
  return string.split('').map(function (char, idx, stringArray) {
    return stringArray.slice(0, idx + 1).join('');
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
/*[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ] */

console.log(palindromes('knitting cassettes'));
// returns
//[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
