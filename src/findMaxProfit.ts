/*
given an array of [2,3,7,1,8,10,15]
the number in array defines the stock price and the index of array defined the days
Write a function which calculates maximum profit by utilizing the following
1. First operation is to buy the stock
2. Iterate the array to find the day where profit will be maximized
3. Sell the stock on the day and buy next day
4. Save the buy index, sale index profit in array
5. repeat until end of array is reached

Approach:
1. select the first element as buy index
2. check the next element, if its lower move forward
3. if its higher, check the next element
4. if its higher then keep on moving forward until the next element is lower then element at buy index
5. save the buy index, sale index and profit in array

 */

export interface Profit {
    start: number
    end: number
    profit: number
}

const profit = (start: number, end: number, diff: number) => {
   const rt: Profit = {
        start: start, 
        end: end, 
        profit: diff
   }
   return rt;
}

function findMaximumProfit(input: number[]): Profit[] {
    let buy = 0;
    let sell = 1;
    let next = sell + 1;
    const n = input.length;

    if (n === 0) return [];
    if (n === 1) return [profit(input[0], input[0], 0)]
    if (n === 2) return [profit(input[0], input[1], input[1] - input[0])]

    while (n < next) {
        
    }
    return []
}

export default findMaximumProfit;