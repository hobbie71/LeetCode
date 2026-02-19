/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Count length
    let length = 0
    let node: ListNode | null = head

    while (node) {
        length++
        node = node.next
    }

    if (length <= 1) return null

    let prevNode = head
    let currentNode = head.next

    if (length - n === 0) {
        prevNode.next = null
        return currentNode
    }

    for (let i = 1; i < length - n; i++) {
        prevNode = currentNode
        currentNode = currentNode.next
    }

    prevNode.next = currentNode.next
    return head
};