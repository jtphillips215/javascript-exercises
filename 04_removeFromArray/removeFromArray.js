const removeFromArray = function(arr, i, j) {
  let index = arr.indexOf(i);
  arr.splice(index, 1);
  if (j != undefined) {
    index = arr.indexOf(j);
    arr.splice(index, 1);
  } 
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
