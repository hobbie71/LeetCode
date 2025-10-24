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
    if (!head) return null

    // Get n^th node & prevNode
    let fast: ListNode = head
    let slow: ListNode = head

    for (let i = 1; i < n; i++) {
        fast = fast.next
    }

    let prevNode: ListNode | null = null

    while (fast && fast.next) {
        prevNode = slow
        slow = slow.next
        fast = fast.next
    }

    // Remove Node
    if (prevNode) {
        prevNode.next = slow.next
    } else {
        head = slow.next
        slow.next = null
    }
    
    return head
};