/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) 
{
    // Check for paterns

    // values with alternating digits: 0 (0), 1 (1), 10 (2), 101 (5), 1010 (10), 10101 (21), 101010 (42), 1010101 (85)
    // pattern is 2x if odd or 2x + 1 if even

    // create a value set to 0
    // create a loop that ends when that value is greater than or equal to n
    // increement value by 2x if odd or 2x + 1 if even
    // return boolean value of (value === n)

    // Time Complexity O(LOGN) - Skips iterations based on a power of 2 gap
    // Space Complexity O(1) - Only integers were used to store values

    let value = 0;
    let i = 1;
    
    while (value < n) 
    {
        value = (value * 2) + i;
        i = (i + 1) % 2;
    }
    
    return value === n;
};
