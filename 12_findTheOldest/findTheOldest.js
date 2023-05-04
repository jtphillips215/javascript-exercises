const findTheOldest = function (people) {
  people.sort((a, b) => {
    if (a.yearOfDeath) {
      const previous = a.yearOfDeath - a.yearOfBirth;
    } else {
      const date = new Date();
      a.yearOfDeath = date.getFullYear;
    }
    if (b.yearOfDeath) {
      const current = b.yearOfDeath - b.yearOfBirth;
    } else {
      const date = new Date();
      b.yearOfDeath = date.getFullYear;
    }
    return a > b ? 1 : -1;
    console.log(a.name, b.name);
  });
  return people[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
