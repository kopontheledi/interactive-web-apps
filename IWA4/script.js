const year = 2050;
let stat = 'parent';
let count = 0;

if (year === 2050) {
  console.log("January", "New Year's Day");
  console.log("March", "Human Rights Day");
  console.log("April", "Family Day");
  console.log("April", "Freedom Day");
  count += 4;

  if (stat === "student") 
  {
    console.log("June", "Youth Day");
    count += 1;
  }
} else {
  console.log("The 'stat' condition is false.");
}

console.log("August", "Women's Day");
console.log("September", "Heritage Day");
console.log("December", "Day of Reconciliation");
count += 3;

if (stat === "parent") {
  console.log("December", "Christmas Day");
  count += 1;
}

console.log("December", "Day of Goodwill");
count += 1;

console.log("The status value as declared initially:",stat);
console.log("TThe year as declared initially:", year);
console.log("The total count of holidays for the above settings:", count);
