// const primaryPhone = 'O748105141'
// const secondaryPhone = '0219131568'

// // Only change below this line

// const primaryValid = parseInt(primaryPhone)  == primaryPhone
// const secondaryValid = parseInt(secondaryPhone)  ==  secondaryPhone

// console.log('Primary phone is valid numerical string:', primaryValid)
// console.log('Secondary phone is valid numerical string:', secondaryValid )




const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof primaryPhone === 'string' && !isNaN(primaryPhone)
const secondaryValid = typeof secondaryPhone === 'string' && !isNaN(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )


/*The code above checks if both primaryPhone and secondaryPhone are strings and 
that they only contain numerical characters.
 We use the typeof operator to check that the type of the variable is a string, 
and isNaN function to check that the string only contains numerical characters.*/