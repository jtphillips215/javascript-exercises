const palindromes = function (string) {
  let splitString = string.toLowerCase().split();
  reversedString = splitString.reverse();
  comparisonString = reversedString.join();
  return string == comparisonString;
};

// Do not edit below this line
module.exports = palindromes;
