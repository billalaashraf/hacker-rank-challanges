import lengthOfLastWorld from '../../src/LeetCode/lengthOfLastWord';

describe('lengthOfLastWorld', () => {
    it('should return 5 when "Hello World" is passed', () => {
        expect(lengthOfLastWorld("Hello World")).toBe(5);
    })

    it('should return 4 when "   fly me   to   the moon  " is passed', () => {
        expect(lengthOfLastWorld("   fly me   to   the moon  ")).toBe(4);
    })

    it('should return 6 when "luffy is still joyboy" is passed', () => {
        expect(lengthOfLastWorld("luffy is still joyboy")).toBe(6);
    })
});