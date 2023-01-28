class ListNode {
    value: number | null;
    next: ListNode | null;

    constructor(value?: number | null, next?: ListNode | null) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
    }
}

function Merge(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let merged: ListNode = new ListNode(null, null)
    let previous: any = merged;

    while(list1 != null && list2 != null) {
        if (list1.value! < list2.value!) {
            previous = list1;
            list1 = list1.next;
        } else {
            previous = list2;
            list2 = list2.next;
        }
        previous = previous.next;
    }

    if (list2 === null) { previous.next = list2;}
    if (list1 === null) { previous.next = list1;}

    return previous.next;
}

export { ListNode , Merge }
