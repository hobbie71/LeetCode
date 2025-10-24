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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null

    let node: ListNode | null = head.next
    let prevNode: ListNode = head

    while (node) {
        if (node.val === prevNode.val) {
            prevNode.next = node.next
        } else {
            prevNode = node
        }

        node = node.next
    }
    
    return head
}