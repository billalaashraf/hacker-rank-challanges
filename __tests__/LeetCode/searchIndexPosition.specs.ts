import searchIndexPosition from '../../src/LeetCode/searchIndexPosition';

describe('searchIndexPosition', () => {
    it('should return 2 where nums = [1, 3, 5, 6] and target = 5', () => {
        expect(searchIndexPosition([1, 3, 5, 6], 5)).toBe(2);
    })

    it('should return 2 where nums = [1, 3, 5, 6] and target = 2', () => {
        expect(searchIndexPosition([1, 3, 5, 6], 2)).toBe(1);
    })

    it('should return 2 where nums = [1, 3, 5, 6] and target = 7', () => {
        expect(searchIndexPosition([1, 3, 5, 6], 7)).toBe(4);
    })
});