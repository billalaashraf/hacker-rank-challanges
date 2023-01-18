import longestCommonPrefix from "../../src/LeetCode/longestCommonPrefix";

describe("longestCommonPrefix", () => {
    it("should return '' from []", () => { 
        expect(longestCommonPrefix([])).toBe("");
    });
    
    it("should return '' from ['']", () => { 
        expect(longestCommonPrefix([""])).toBe("");
    });
    
    it("should return '' from ['dog', 'bat', 'cat', 'jet']", () => { 
        expect(longestCommonPrefix(['dog', 'bat', 'cat', 'jet'])).toBe("");
    });

    it("should return 'ab' from ['abnormal', 'abigale', 'abandon', 'abby']", () => { 
        expect(longestCommonPrefix(['abnormal', 'abigale', 'abandon', 'abby'])).toBe("ab");
    });
})