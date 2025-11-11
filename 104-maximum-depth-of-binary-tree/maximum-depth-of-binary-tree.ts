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

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    let maxDepth = 0;
    const queue: TreeNode[] = [root];

    while (queue.length) {
        let count = queue.length;

        maxDepth++;

        while (count > 0) {
            const node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            count--;
        }
    }

    return maxDepth
};