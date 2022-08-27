const removeFromArray = function(arr, i, j, k, x) {
  
  if (i != undefined) {
    let index = arr.indexOf(i);
    if (index != -1) {
      arr.splice(index, 1);
    }
  }
  if (j != undefined) {
    index = arr.indexOf(j);
    if (index != -1) {
      arr.splice(index, 1);
    }
  } 
  if (k != undefined) {
    index = arr.indexOf(k);
    if (index != -1) {
      arr.splice(index, 1);
    }
  }
  if (x != undefined) {
    index = arr.indexOf(x);
    if (index != -1) {
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
