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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head) return

    // Get middle of list
    let fast: ListNode | null = head
    let middle: ListNode = head

    while (fast && fast.next) {
        middle = middle.next
        fast = fast.next.next
    }

    // Reverse second list

    let second = middle.next
    middle.next = null

    let prevNode: ListNode | null = null 

    while (second) {
        const nextNode = second.next
        second.next = prevNode
        prevNode = second
        second = nextNode
    }

    second = prevNode

    // Merge both lists
    let first = head

    while (first && second) {
        const temp1 = first.next
        const temp2 = second.next

        first.next = second
        second.next = temp1
        
        first = temp1
        second = temp2
    }
};