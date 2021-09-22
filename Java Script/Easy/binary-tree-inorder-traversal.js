/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, order=[]) {
    if(!root) return order;
    order = inorderTraversal(root.left, order);
    order.push(root.val);
    order = inorderTraversal(root.right, order);
    
    return order;
};
