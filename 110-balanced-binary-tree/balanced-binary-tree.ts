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
    let output = true

    const dfs = (node: TreeNode | null): number => {
        if (!node || !output) return 0

        const left = dfs(node.left)
        const right = dfs(node.right)

        if (Math.abs(left - right) > 1) {
            output = false
        }

        return Math.max(left, right) + 1
    }

    dfs(root)
    return output
};