import climningStairs from '../../src/LeetCode/climbingStairs';

describe(`climbingStairs Function`, () => {
    
    it(`should return 2 if 2 is passed`, () => {
        expect(climningStairs(2)).toBe(2);
    })
    
    it(`should return 3 if 3 is passed`, () => {
        expect(climningStairs(3)).toBe(3);
    })

    it(`should return 25 if 121393 is passed`, () => {
        expect(climningStairs(25)).toBe(121393);
    })

});