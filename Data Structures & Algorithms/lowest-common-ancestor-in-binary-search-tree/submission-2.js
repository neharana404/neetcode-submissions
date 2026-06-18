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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let cur = root

        while (cur) {
            if (q.val > cur.val && p.val > cur.val) {
                cur = cur.right
            } else if (q.val < cur.val && p.val < cur.val) {
                cur = cur.left
            } else {
                return cur
            }
        }
        return null
    }
}
