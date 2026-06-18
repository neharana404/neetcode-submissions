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
    rightSideView(root) {
        let res = []
        const q = [root]

        while(q.length > 0) {
            const n = q.length
            let rightSide = null

            for (let i = 0; i < n; i++) {
                let node = q.shift()
                if (node) {
                    rightSide = node
                    q.push(node.left)
                    q.push(node.right)
                }
            }
            
            if (rightSide) {
                res.push(rightSide.val)
            }
        }
        return res
    }
}
