import plusOne from '../../src/LeetCode/plusOne';

describe('plusOne', () => {
    it('should return [1, 2, 4] when [1, 2, 3] is passed', () => {
        expect(plusOne([1,2,3])).toEqual([1,2,4]);
    });

    it('should return [4,3,2,1] when [4,3,2,2] is passed', () => {
        expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
    });

    it('should return [9] when [10] is passed', () => {
        expect(plusOne([9])).toEqual([1,0]);
    });

    it('should return [8,9,9] when [9,0,0] is passed', () => {
        expect(plusOne([8,9,9])).toEqual([9,0,0]);
    });

    it('should return [9,9,9] when [1,0,0,0] is passed', () => {
        expect(plusOne([9,9,9])).toEqual([1,0,0,0]);
    });
});