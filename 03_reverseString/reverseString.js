const reverseString = function(str) {
  let charArray = str.split("");
  let revArray = charArray.reverse();
  return revArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
