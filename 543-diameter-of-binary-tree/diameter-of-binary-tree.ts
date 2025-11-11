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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let output: number = 0
    
    function dfs(node: TreeNode | null): number {
        if (!node) return 0

        const leftLength = dfs(node.left)
        const rightLength = dfs(node.right)
        output = Math.max(output, leftLength + rightLength)

        return Math.max(leftLength, rightLength) + 1
    }

    dfs(root)
    return output
}