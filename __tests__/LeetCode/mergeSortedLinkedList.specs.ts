import { ListNode , Merge } from '../../src/LeetCode/mergeSortedLinkedList'

describe('mergeSortedLinkedList', () => {

    it('should return a list from [12, 17, 21, 23, 30], [13, 18, 20, 22, 40] as [12, 13, 17, 18, 20, 21, 22, 23, 30, 40]', () => {
        const list1 = ListNode.create([12, 17, 21, 23, 30]);
        const list2 = ListNode.create([13, 18, 20, 22, 40]);
        
        const merged = Merge(list1, list2);
        const array = ListNode.toArray(merged!)

        expect(array).toEqual([12, 13, 17, 18, 20, 21, 22, 23, 30, 40]);

    })

    it('should return a list from [12, 17, 21, 23, 30], [] as [12, 17, 21, 23, 30]', () => {
        const list1 = ListNode.create([12, 17, 21, 23, 30]);
        const list2 = ListNode.create([]);
        
        const merged = Merge(list1, list2);
        const array = ListNode.toArray(merged!)

        expect(array).toEqual([12, 17, 21, 23, 30]);

    })
    
    it('should return a list from [], [13, 18, 20, 22, 40] as [13, 18, 20, 22, 40]', () => {
        const list1 = ListNode.create([]);
        const list2 = ListNode.create([13, 18, 20, 22, 40]);
        
        const merged = Merge(list1, list2);
        const array = ListNode.toArray(merged!)

        expect(array).toEqual([13, 18, 20, 22, 40]);

    })

})