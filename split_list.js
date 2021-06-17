class Solution {
    solve(nums) {
        let min = Infinity;
        while(nums.length > 1) {
            let temp = nums.pop();
            if(min > temp) min = temp;
            // console.log(Math.max(...nums), min)
            if(min > Math.max(...nums)) return true;
        }
        return false;
    }
}
