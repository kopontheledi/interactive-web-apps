// scripts.js
const data = {
    lists: [
        ['first', [15, 11, 13, 7, 5]],
        ['second', [2, 6, 8, 4, 14, 12, 10]],
        ['third', [9, 3, 1]],
    ]
}
// Only edit below
const result = []
const extractBiggest = () => {
const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];
    if (first.length > 0 && (second.length === 0 || first[first.length - 1]> second[second.length - 1]) && (third.length === 0 || first[first.length - 1] > third[third.length - 1])) {
        return first.pop();
    }
    if (second.length > 0 && (third.length === 0 || second[second.length-1] > third[third.length - 1])){
        return second.pop();
    }
    if (third.length > 0) {
        return third.pop();
    }
}
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