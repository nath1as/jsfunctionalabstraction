function buyFruit(array) {
  var result = [];
  array.forEach(function (subarray) {
    for (var i = 0; i < subarray[1]; i++) {
      result.push(subarray[0]);
    }
  });
  return result;
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

