import removeElements from '../../src/LeetCode/removeElements';

describe('removeElements', () => {
    it('should return [2, 2, 2, 3] when 3 and [3,2,2,3] is passed', () => {
        const nums = [3,2,2,3];
        const expectedNums = [2, 2, 2, 3]
        const value = 3;
        const k = removeElements(nums, value);
        expect(k).toBe(2);
        expect(nums).toEqual(expectedNums);
    })

    it('should return [0,1,4,0,3] when 2 and [0,1,2,2,3,0,4,2] is passed', () => {
        const nums = [0,1,2,2,3,0,4,2];
        const expectedNums = [0, 1, 3, 0, 4, 0, 4, 2]
        const value = 2;
        const k = removeElements(nums, value);
        expect(k).toBe(5);
        console.log(nums);
        expect(nums).toEqual(expectedNums);
    })
});