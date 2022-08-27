const removeFromArray = function(arr, i, j) {
  
  if (i != undefined && !isNaN(i)) {
    let index = arr.indexOf(i);
    if (index != -1) {
      arr.splice(index, 1);
    }
  }
  if (j != undefined && !isNaN(j)) {
    index = arr.indexOf(j);
    if (index != -1) {
      arr.splice(index, 1);
    }
  } 
  console.log(arr);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
