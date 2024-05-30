function findMaxNumber(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...arr);
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let maxNumber = findMaxNumber(numbers);

console.log(maxNumber); // This will print 5
