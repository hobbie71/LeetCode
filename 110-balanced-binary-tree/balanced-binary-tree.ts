/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true
    
    function dfs(node: TreeNode | null): number {
        if (!node) return 0

        const leftLength: number = dfs(node.left)
        const rightLength: number = dfs(node.right)

        if (leftLength === -1 || rightLength === -1) return -1
        if (Math.abs(leftLength - rightLength) > 1) return -1

        return Math.max(leftLength, rightLength) + 1
    }

    return dfs(root) !== -1
};