
const firstName = 'John';
const age = 35;
const myhobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

function printhobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${myhobby}!`)
}

printhobby();
