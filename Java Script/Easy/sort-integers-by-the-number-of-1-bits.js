/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) 
{
    // Create sort call on arr
    // Name the nums being compared numA and numB
    // Check which number has the most 1s in its binary from
    // create 1s counter variable for numA
    // run a loop that runs until numA is equal to 0
    // add numA module divided by 2 to the counter
    // do a right shift on numA
    // do the same for numB
    // Place the value with more ones to the right and the one with less 1s to the left
    // If they have the same ones sort them by total value
    // return the array

    // Time Complexity: O(N * LOGN) - Counting the 1s is O(1) due to the numbers having a max amount of digits (constant value)
    //                                The built in sort is O(N * LOGN)                              

    // Space Complexity: O(N) - Only integers were used to store values, but the built in sort takes up space. 

    return arr.sort((numA, numB) => 
    {
        let countA = 0;
        let countB = 0;
        let order = numA - numB;

        while (numA > 0) 
        {
            countA += numA % 2;
            numA = numA >>> 1;
        }

        while (numB > 0) 
        {
            countB += numB % 2;
            numB = numB >>> 1;
        }

        let count = countA - countB;
        return count === 0 ? order : count;
    })
};
