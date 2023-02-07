function plusOne(digits: number[]): number[] {
    const length = digits.length - 1;
    for (let i = length; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i] = digits[i] + 1;
            return digits;
        }
    }
    if (digits[0] === 0) {
        digits = [1, ...digits];
    }
    return digits;
}

export default plusOne;