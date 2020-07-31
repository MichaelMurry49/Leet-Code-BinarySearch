/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) 
{
    // Going to do a similar solution to two sums
    // Create Set that stores each value of the array
    // Iterate through the array twice
    // Once to fill the hash
    // and once to test if a value at half the size of an array element exists in the hash

    // O(N) - Time
    // O(N) - Space;

    let halves = new Set(); // O(n) space
    let z = 0;
    for (let i = 0; i < arr.length; i++) // O(n) time
    { 
        halves.add(arr[i]);
        if (arr[i] === 0) z++;
        if (z === 2) return true;
    }
    for (let i = 0; i < arr.length; i++) //O(n) time
    { 
        if (halves.has(arr[i] / 2) && arr[i] !== 0) return true
    }
    return false;
};