import romanToInt from '../../src/LeetCode/romanToInteger'

describe('romanToInt', () => { 
    it('should return the 2 for "II" roman number', () => {
        expect(romanToInt('II')).toBe(2);
    });

    it('should return the 2 for "IV" roman number', () => {
        expect(romanToInt('IV')).toBe(4);
    });

    it('should return the 3724 for "MMMDCCXXIV" roman number', () => {
        expect(romanToInt('MMMDCCXXIV')).toBe(3724);
    });
   
})