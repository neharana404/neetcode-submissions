/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        const res = []

        const inorder = (root) => {
            if (!root) return

            inorder(root.left)
            res.push(root.val)
            inorder(root.right) 
        } 

        inorder(root)
        return res
    }
}
