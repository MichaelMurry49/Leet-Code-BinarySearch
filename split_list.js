class Solution {
    solve(nums) {
        let forwardMax = [];
        let backwardMin = [];

        let fmax = nums[0];
        let bmin = nums[nums.length-1];
        
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > fmax) {
                fmax = nums[i];
            }

            if(nums[nums.length-1-i] < bmin) {
                bmin = nums[nums.length-1-i];
            }

            forwardMax.push(fmax);
            backwardMin.push(bmin);
        }

        backwardMin = backwardMin.reverse();

        for(let i = 0; i < nums.length-1; i++) {
            if(forwardMax[i] < backwardMin[i+1]) return true;
        }

        return false;

    }
}
