import removeDuplicates from '../../src/LeetCode/removeDuplicatesFromSortedArray';

describe ('removeDuplicatesFromSortedArray', () => {
    it ("should return 1, [1,2, '_'] if [1,1,2] is passed", () => {
        const [count, nums] = removeDuplicates([1,1,2]);
        expect(nums).toHaveLength(3);
        expect(count).toBe(1);
        expect(nums).toEqual([1, 2, '_']);
    })

    it ("should return 5, [0, 1, 2, 3, 4, 5, '_', '_', '_', '_', '_'] if [0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 5] is passed", () => {
        const [count, nums] = removeDuplicates([0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
        expect(nums).toHaveLength(11);
        expect(count).toBe(5);
        expect(nums).toEqual([0, 1, 2, 3, 4, 5, '_', '_', '_', '_', '_']);
    })
})