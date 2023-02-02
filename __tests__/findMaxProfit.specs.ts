import findMaximumProfit from '../src/findMaxProfit'

describe('test findMaxProfit function', () => {

    it ('shoud return 2 value for input [2,3,7,1,8,10,15]', () => {
        const profit = findMaximumProfit([2,3,7,1,8,10,15]);
        expect(profit).toHaveLength(2);
        expect(profit[0]).toBe({ start: 0, end: 2, profit: 5});
        expect(profit[1]).toBe({start: 3, end: 6, profit: 14})
    })

    // it ('shoud return 1 value for input [2,1,1,1,4,1,15]', () => {
    //     const profit = findMaximumProfit([2,1,1,1,4,1,15]);
    //     expect(profit).toHaveLength(2);
    //     expect(profit[0]).toBe({ start: 0, end: 4, profit: 4});
    //     expect(profit[0]).toBe({ start: 5, end: 6, profit: 15});
    // })

    // it ('shoud return 1 value for input [2,1,1,1,1,1,15]', () => {
    //     const profit = findMaximumProfit([2,1,1,1,1,1,15]);
    //     expect(profit).toHaveLength(1);
    //     expect(profit[0]).toBe({ start: 0, end: 6, profit: 13});
    // })

    // it ('shoud return empty array for input [2]', () => {
    //     const profit = findMaximumProfit([2]);
    //     expect(profit).toHaveLength(0);
    // })
})