const removeFromArray = function(arr, i) {
  let index = arr.indexOf(i);
  arr.splice(index, 1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
