let date = 2050;
let stat = 'parent';
let count = 0;


if (date === 2050) {
  console.log("January", "New Year's Day");
  console.log("March", "Human Rights Day");
  
  if (true) { 
 const date = 'April'
  console.log(date, "Family Day");
  console.log(date, "Freedom Day");
  count += 4;
}

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

if (true){ 
const date = 'December'
console.log(date, "Day of Reconciliation");
count += 3;

if (stat === "parent") {
  console.log(date, "Christmas Day");
  count += 1;
}


console.log(date, "Day of Goodwill");
count += 1;
}

console.log("The status value as declared initially:",stat);
console.log("TThe year as declared initially:", date);
console.log("The total count of holidays for the above settings:", count);
