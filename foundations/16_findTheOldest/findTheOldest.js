const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  console.log(death - birth);
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((a, b) => {
    const oldest = getAge(a.yearOfBirth, a.yearOfDeath);
    const current = getAge(b.yearOfBirth, b.yearOfDeath);
    return current > oldest ? b : a;
  });
};

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
