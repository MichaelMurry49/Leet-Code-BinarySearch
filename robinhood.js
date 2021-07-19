class Solution {
    solve(n, e, o, t) {
        let alt = "e";
        let val = n;
        let count = 0;

        while(val < t) {
            if(alt === "e") {
                val += (val * (e/100))
                alt = "o"
            } else {
                val += (val * (o/100))
                alt = "e"
            }
            
            count++;
        }
        return count;
    }
}
