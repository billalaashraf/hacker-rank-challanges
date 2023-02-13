import mySqrt from '../../src/LeetCode/findMySqrt'

describe('findMySqrt Function', () => {
    it ('should return 2 if 4 is passed', () => {
        expect(mySqrt(4)).toBe(2);
    })

    it ('should return 3 if 9 is passed', () => {
        expect(mySqrt(9)).toBe(3);
    })

    it ('should return 2 if 8 is passed', () => {
        expect(mySqrt(8)).toBe(2);
    })

    it ('should return 15 if 225 is passed', () => {
        expect(mySqrt(225)).toBe(15);
    })

    it ('should return 89 if 7923 is passed', () => {
        expect(mySqrt(7923)).toBe(89);
    })

})