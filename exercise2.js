//part 1
const welcome = function (name1, name2, name3) {
  console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
};

welcome("n", "m", "o");

//part 2
const ageCal = function (year) {
    if (year <= 0) {
        return "Try again";
    }
  const age = new Date().getFullYear() - year;
  return age;
};

console.log(ageCal(2000));
console.log(ageCal(0));
console.log(ageCal(-1999));

//part 3
const welcomeAge = function (name1, age1, name2, age2, name3, age3) {
  console.log(
    `Welcome ${name1}, you are ${ageCal(age1)}.\nWelcome ${name2}, you are ${ageCal(age2)}.\nWelcome ${name3}, you are ${ageCal(age3)}.`
    );
};

welcomeAge("n", 2000, "m", 1999, "o", 2005);
