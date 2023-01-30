import findSum from '../src/findTheSum';

describe('testing findSum function', () => {
    it ('should return [5, 2], for sum 6 and array [3, 1, 2, 0, -5, 4, -2, -8]', () => {
        expect(findSum([3, 1, 2, 0, -5, 4, -2, -8], 6)).toEqual([5, 2]);
    })

    it ('should return [5, 0], for sum 7 and array [3, 1, 2, 0, -5, 4, -2, -8]', () => {
        expect(findSum([3, 1, 2, 0, -5, 4, -2, -8], 7)).toEqual([5, 0])
    })

    it ('should return [6,7], for sum -10 and array [3, 1, 2, 0, -5, 4, -2, -8]', () => {
        expect(findSum([3, 1, 2, 0, -5, 4, -2, -8], -10)).toEqual([7, 6])
    })
})