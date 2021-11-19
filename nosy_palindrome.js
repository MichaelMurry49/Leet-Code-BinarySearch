class Solution {
    solve(s) {
        let start = 0;
        let end = s.length-1;
        let nums = "1234567890";

        while(start <= end) {
            if(nums.includes(s[start]) || s[start] !== s[start].toLowerCase()) {
                start++;
                continue;
            }

            if(nums.includes(s[end]) || s[end] !== s[end].toLowerCase()) {
                end--;
                continue;
            }

            if(s[start] === s[end]) {
                start++;
                end--;
                continue;
            }
            return false;

        } 
        return true;
    }
}
