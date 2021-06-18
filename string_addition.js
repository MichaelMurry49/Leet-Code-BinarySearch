class Solution {
    solve(a, b) {
        let lena = a.length
        let lenb = b.length
        let short = Math.min(lena, lenb)
        let long = Math.max(lena, lenb)
        let r = 0;
        let c = "";

        for(let i = 0; i < short; i++) {
            let d1 = parseInt(a[lena-1-i]);
            let d2 = parseInt(b[lenb-1-i]);
            let arr = this.addDigit(d1,d2,r);
            let d = arr[0];
            r = arr[1];
            c = d + c;
        }
        let t;
        lena > lenb ? t = a : t = b;

        for(let i = short; i < long; i++) {
            let d1 = parseInt(t[long-1-i]);
            let arr = this.addDigit(d1,0,r);
            let d = arr[0];
            r = arr[1];
            c = d + c;
        }

        if(r > 0) c = r + c;
        return c;

    }

    addDigit(d1, d2, r) {
        let sum = (d1 + d2 + r) % 10;
        let rm = Math.floor((d1 + d2 + r) / 10);
        return [sum, rm];
    }

}
