class ListNode {
    value: number | null;
    next: ListNode | null;

    constructor(value?: number | null, next?: ListNode | null) {
        this.value = (value === undefined ? 0 : value);
        this.next = (next === undefined ? null : next);
    }

    public static create(array:number[]): ListNode | null{
        if (!array || array.length < 1) return null;
        let head = new ListNode(array[0], null);
        let tail = head;
        let temp = null;
        for (let i=1; i < array.length; i++) {
            temp = new ListNode(array[i], null);
            tail.next = temp;
            tail = temp;
        }
        return head;
    }

    public static toArray(list: ListNode):number[] {
        const rt: number[] = [];
        let temp = list;
        while (temp !== null) {
            rt.push(temp.value!)
            temp = temp.next!;
        }
        return rt;
    }
}

function Merge(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let result = null;
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.value! <= list2.value!) {
        result = list1;
        result.next = Merge(list1.next, list2)
    } else {
        result = list2;
        result.next = Merge(list1, list2.next)
    }

    return result;
}

export { ListNode , Merge }
