let state = 'idle'
let user = null
let calculated = '1'
// Only allowed to change below

//converts the string value of calculated to a number and increments it by 1. calculated becomes 2. 
//Since 2 is not greater than 2, the if statements do not execute and user and state remain as their 
//initial values of null and 'idle', respectively.

const logCalc = () => {
    const isString = typeof calculated === 'string';
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
    calculated = calculatedAsNumber + 1;
}

//calcUser() is called the second time. logCalc() is called again, which increments calculated by 1.
// calculated becomes 3. Since 3 is greater than 2, the first if statement executes, setting user to 'John'.
// The second if statement also executes, setting state to 'requesting'.
const calcUser = () => {
  logCalc ();
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';
}

//checkUser() is called again. This time, user is not null and state is 'requesting', so the message
// "User: John (3)" is printed to the console.
const checkUser  = () => {
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`) ;
  }
}
// Only allowed to change code above
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()
checkUser()
calcUser()