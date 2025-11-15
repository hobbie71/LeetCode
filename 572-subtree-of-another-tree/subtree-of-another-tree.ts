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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root || !subRoot) return true

    const queue: TreeNode[] = [root]

    while (queue.length) {
        const node = queue.shift()

        if (isSameTree(node, subRoot)) return true

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return false

    function isSameTree(node1: TreeNode | null, node2: TreeNode | null): boolean {
        if (!node1 && !node2) return true
        if (!node1 || !node2) return false
        if (node1.val !== node2.val) return false
        return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
    }
};