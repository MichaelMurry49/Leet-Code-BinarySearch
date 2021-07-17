/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
    solve(node) {
        let even = false;
        let last = -1;
        let cur = node;
        while(cur) {
            if(even) {
                cur.val = last;
            } else {
                last = cur.val;
                if(cur.next) cur.val = cur.next.val;
            }
            even = !even;
            cur = cur.next;
        }

        return node;
    }
}
