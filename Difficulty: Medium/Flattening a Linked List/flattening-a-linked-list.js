/*
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {

    merge(a, b) {

        let dummy = new Node(0);
        let curr = dummy;

        while (a && b) {

            if (a.data <= b.data) {
                curr.bottom = a;
                a = a.bottom;
            } else {
                curr.bottom = b;
                b = b.bottom;
            }

            curr = curr.bottom;
        }

        if (a) curr.bottom = a;
        else curr.bottom = b;

        return dummy.bottom;
    }

    flatten(root) {

        if (!root || !root.next) {
            return root;
        }

        root.next = this.flatten(root.next);

        return this.merge(root, root.next);
    }
}