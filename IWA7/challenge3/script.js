const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'


// Only change below this line

const owed = (-1 * parseFloat(leoBalance)) + (-1 * parseFloat(sarahBalance) )
const leo = `${leoName} ${leoSurname} Owed: R ${(-1 * parseFloat(leoBalance)).toFixed(2)}`
const sarah = `${sarahName} ${sarahSurname}) Owed: R ${(-1 * parseFloat(sarahBalance)).toFixed(2)}`
const total = `  Total amount owed: R ${owed.toFixed(2)}`
const result = `\n${leo}\n${sarah}\n\n${divider}\n${total}\n${divider}`

console.log(result)


/*We can use the .toFixed(2) method to format the numbers with 2 decimal places. This method returns a string representation 
of the number with the specified number of decimal places.*/
/*Note that we need to multiply the balance values by -1 to make them positive, since the .toFixed() method doesn't work with negative numbers.
the \n newline character to format the output.*/