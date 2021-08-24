class Solution {
    solve(nums) {
        let peaks = [];
        let cur = [];
        if(nums.length <= 1) return peaks;
        
        for(let i = 0; i < nums.length; i++) {
            if(cur.length >= 1) {
                if(nums[cur[0]] === nums[i]) {
                    cur.push(i);
                    if(i === nums.length-1) {
                        if(cur[0] !== 0) peaks = peaks.concat(cur)
                    }
                    continue;
                } else if(nums[cur[0]] > nums[i]) {
                    peaks = peaks.concat(cur);
                    cur = [];
                    continue;
                } else if(nums[cur[0]] < nums[i]) {
                    cur = [];
                }
            }
            
            if(i === 0) {
                if(nums[1] < nums[0]) {
                    peaks.push(0);
                } else if(nums[1] === nums[0]) {
                    cur.push(0)
                }
            } else if(i === nums.length-1) {
                if(nums[i-1] < nums[i]) {
                    peaks.push(i);
                } else if(cur.length > 0) {
                    if(nums[cur[0]] === nums[i]) {
                        cur.push(i);
                    }
                    peaks = peaks.concat(cur);
                }
            } else {
                if(nums[i] > nums[i+1] && nums[i] > nums[i-1]) {
                    peaks.push(i);
                    cur = [];
                }

                if(nums[i] === nums[i+1] && nums[i] > nums[i-1]) {
                    cur.push(i)
                }
            }
        }
        
        return peaks;
    }
}
