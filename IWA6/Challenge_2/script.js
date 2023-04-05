
const rent = 400;
const tax = '12%'; 
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00; // hourOfDay and minuteOfDay should be numbers, not strings
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay === 0 && minuteOfDay === 0) {
    const taxAsDecimal = parseFloat(tax) / 100;
	const startingAfterTax = salary * (1 - taxAsDecimal); // Calculate starting balance after tax
	const balance = startingAfterTax - transport - food - rent; // Calculate final balance
	console.log( 'R' + balance.toFixed(2));
}

