const repeatString = function(passedString, passedNumber) {
  if(passedNumber >= 0) {
    return passedString.repeat(passedNumber);
  }
  else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
