class Solution {
    solve(rect0, rect1) {
        let x0 = rect0[0];
        let x1 = rect0[2];
        let xa = rect1[0];
        let xb = rect1[2];
        let y0 = rect0[1];
        let y1 = rect0[3];
        let ya = rect1[1];
        let yb = rect1[3];

        // check if x1 fits range or x0 fits range
        if((x0 > xa && x0 < xb) || (x1 > xa && x1 < xb) || (x0 <= xa && x1 >= xb)) {
            // check y range
            if((y0 > ya && y0 < yb) || (y1 > ya && y1 < yb) || (y0 <= ya && y1 >= yb)) return true;
        }
        
        return false;
    }
}
