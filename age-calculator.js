const ageCalculator = function (name, yearOfBirtrh, currentYear) {

  
  let currentAge = currentYear - yearOfBirtrh;
  return (name + " is " + currentAge +" years old.");
  
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));




