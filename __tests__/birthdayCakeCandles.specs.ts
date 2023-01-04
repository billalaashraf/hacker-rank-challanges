import birthdayCakeCandles from "../src/birthdayCakeCandles";

describe("test birthdayCakeCandles function", () => {
    it("should return 0 if empty array is passed", () => {
        expect(birthdayCakeCandles([])).toBe(0)
    });

    it("should return 2 if [3,1,2,3] is passed", () => {
        expect(birthdayCakeCandles([3,1,2,3])).toBe(2)
    })

    it("should return 3 if [1,3,4,2,1,1,4,2,3,4,3,2,1,5,3,4,1,2,5,3,4,4,4,5] is passed", () => {
        expect(birthdayCakeCandles([1,3,4,2,1,1,4,2,3,4,3,2,1,5,3,4,1,2,5,3,4,4,4,5])).toBe(3)
    })
})