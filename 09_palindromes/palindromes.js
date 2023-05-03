const palindromes = function (string) {
  const strippedString = string.toLowerCase().replace(/[^a-z]/g, "");
  const comparisonString = strippedString.split("").reverse().join("");
  return strippedString == comparisonString;
};

// Do not edit below this line
module.exports = palindromes;
