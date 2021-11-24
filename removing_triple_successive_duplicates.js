class Solution {
    solve(s) {
        let cur = "";
        let count = 0;
        let moves = 0;

        for(let i = 0; i < s.length; i++) {
            if(s[i] === cur) {
                count++;
            } else {
                cur = s[i];
                if(count >= 3) {
                    let val = Math.floor(count/3);
                    moves += val;
                }
                count = 1;
            }
        }

        if(count >= 3) {
            let val = Math.floor(count/3);
            moves += val;
        }

        return moves;
    }
}
