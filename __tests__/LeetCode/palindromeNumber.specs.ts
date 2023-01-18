import isPalindrome from '../../src/LeetCode/palindromeNumber';

describe('isPalindrome', () => {
    it('should return true for 121', () => {
        expect(isPalindrome(121)).toBe(true);
    });

    it('should return fale for 221', () => {
        expect(isPalindrome(221)).toBe(false);
    });

    it('should return fale for 3223', () => {
        expect(isPalindrome(3223)).toBe(true);
    });

    it('should return fale for 110', () => {
        expect(isPalindrome(110)).toBe(false);
    });
})