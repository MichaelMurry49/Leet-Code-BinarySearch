class Solution {
    solve(nums) {
        let counts = {};
        let max = 0;

        for(let num of nums) {
            counts[num] ? counts[num]++ : counts[num] = 1;
            if(counts[num] > max) max = counts[num];
        }

        let keys = Object.keys(counts);
        let allWork = false;
        
        for(let i = 2; i <= max; i++) {
            for(let j = 0; j < keys.length; j++) {
                if(counts[keys[j]] % i !== 0) break;
                if(j === keys.length - 1) allWork = true;
            }
            if(allWork) return true;
        }

        return false;
    }
}
