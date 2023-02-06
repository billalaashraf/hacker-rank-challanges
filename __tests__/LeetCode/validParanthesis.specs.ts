import validPranthesis from '../../src/LeetCode/validParathesis'

describe('validPranthesis', () => {
    it('should return true, if "{[({})]}" is passed', () => {
        expect(validPranthesis("{[({})]}")).toBe(true);
    });

    it('should return true, if "" is passed', () => {
        expect(validPranthesis("")).toBe(true);
    });

    it('should return true, if "{}(){}[]()[]" is passed', () => {
        expect(validPranthesis("{}(){}[]()[]")).toBe(true);
    });

    it('should return false, if "{}(){}]()[]" is passed', () => {
        expect(validPranthesis("{}(){}]()[]")).toBe(false);
    });

    it('should return false, if "{]" is passed', () => {
        expect(validPranthesis("{]")).toBe(false);
    });

});