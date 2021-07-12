class Solution {
    solve(nums) {
        
        let vals = new Set();
        for(let n of nums) {
            vals.add(n);
        }

        nums.sort((a,b) => a-b);

        // console.log(vals, nums)

        for(let i = 0; i < nums.length; i++) {
            for(let j = i+1; j < nums.length; j++) {
                let val = Math.pow(nums[i],2) + Math.pow(nums[j],2);
                val = Math.sqrt(val);
                if(val > nums[nums.length-1]) break;
                if(vals.has(val)) return true;
            }
        } 

        return false;
        
    }
}
