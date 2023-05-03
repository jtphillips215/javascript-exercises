const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  } else if (n <= 1) {
    return Number(n);
  } else {
    return Number(fibonacci(n - 1) + fibonacci(n - 2));
  }
};

// Do not edit below this line
module.exports = fibonacci;
