/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    let stack = [];
    let current = head;
    while (current !== null) {
        while (stack.length > 0 && stack[stack.length - 1].val < current.val) {
            stack.pop();
        }
         stack.push(current);
        current = current.next;
    }
    for (let i = 0; i < stack.length - 1; i++) {
        stack[i].next = stack[i + 1];
    }
    if (stack.length > 0) {
        stack[stack.length - 1].next = null;
        return stack[0];
    }
    return null;
};