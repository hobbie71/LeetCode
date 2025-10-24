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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let dummyA = headA
    let dummyB = headB

    while (dummyA !== dummyB) {
        dummyA = dummyA ? dummyA.next : headB
        dummyB = dummyB ? dummyB.next : headA
    }

    return dummyA
};