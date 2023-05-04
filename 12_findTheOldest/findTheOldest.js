const findTheOldest = function (people) {
  people.sort((a, b) => {
    const previous = a.yearOfDeath - a.yearOfBirth;
    const current = b.yearOfDeath - b.yearOfBirth;
    return a > b ? 1 : -1;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
