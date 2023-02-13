function mySqrt(x: number): number {
    let start: number = 0, end: number = x;
    if (x === 0 || x === 1) return x;
    let result:number = 0;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const square = mid * mid;
        if (square === x) return mid;
        else if (square > x) {
            end = mid - 1;
        } else {
            result = mid;
            start = mid + 1
        }
    }
    return result;
}

export default mySqrt;