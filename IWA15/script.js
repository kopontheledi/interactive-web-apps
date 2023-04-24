// scripts.js
const data = {
    lists: [
        ['first', [15, 11, 13, 7, 5]],
        ['second', [2, 6, 8, 4, 14, 12, 10]],
        ['third', [9, 3, 1]],
    ]
}
// Only edit below

//The code then defines an empty array called result and a function called extractBiggest.
const result = []
const extractBiggest = () => {
const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];

/**
 * The code then defines an empty array called result and a function called extractBiggest. The purpose of this function is to extract the
 *  biggest number from the arrays in data.lists, one array at a time, in the order of the arrays specified in data.lists. The function pops
 *  the last element from the array containing the biggest number and returns it. If multiple arrays have the same biggest number, the function 
 * returns the biggest number from the first array in data.lists that has that number.
 */

    if (first.length > 0 && (second.length === 0 || first[first.length - 1]> second[second.length - 1]) && (third.length === 0 || first[first.length - 1] > third[third.length - 1])) {
        return first.pop();
    }
    if (second.length > 0 && (third.length === 0 || second[second.length-1] > third[third.length - 1])){
        return second.pop();
    }
    
        return third.pop();
    
}

/**
 * The function extractBiggest uses the if statement to determine which array contains the biggest number. The function checks if the
 *  length of the first array is greater than zero and if either the second array is empty or the last element of the first array is greater 
 * than the last element of the second array, and if either the third array is empty or the last element of the first array is greater than 
 * the last element of the third array. If all these conditions are true, the function pops the last element from the first array and returns it.

If the above condition is not met, the function checks if the length of the second array is greater than zero and if either the third 
array is empty or the last element of the second array is greater than the last element of the third array. If these conditions are true, 
the function pops the last element from the second array and returns it.

If the above conditions are also not met, the function checks if the length of the third array is greater than zero. If this condition 
is true, the function pops the last element from the third array and returns it.
 */


// Only edit above
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
console.log(result)