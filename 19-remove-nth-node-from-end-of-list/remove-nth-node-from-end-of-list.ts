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
    
    // Reverse LinkedList
    let reversedHead = reverseList(head)

    // Get n^th node & previous node
    let node: ListNode = reversedHead
    let prevNode: ListNode | null = null

    for (let i = 1; i < n; i++) {
        prevNode = node
        node = node.next
    }

    // Remove node from LinkedList
    if (!node.next && !prevNode) {
        return null
    } else if (prevNode) {
        prevNode.next = node.next
    } else {
        reversedHead = reversedHead.next
    }
    
    node.next = null

    return reverseList(reversedHead)
};

/**
 * Takes head of singly LinkedList and returns head of the LinkedList reversed
 * @param head head of LinkedList
 * @return head of reversed LinkedList
 */
function reverseList(head: ListNode): ListNode {
    let node = head
    let prevNode: ListNode | null = null


    while (node) {
        const nextNode: ListNode | null = node.next

        node.next = prevNode

        prevNode = node
        node = nextNode
    }

    return prevNode
}