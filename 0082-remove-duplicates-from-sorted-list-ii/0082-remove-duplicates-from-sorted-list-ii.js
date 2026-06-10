var deleteDuplicates = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let current = head;

    while (current) {
        if (current.next && current.val === current.next.val) {
            let duplicate = current.val;

            while (current && current.val === duplicate) {
                current = current.next;
            }

            prev.next = current;
        } else {
            prev = current;
            current = current.next;
        }
    }

    return dummy.next;
};