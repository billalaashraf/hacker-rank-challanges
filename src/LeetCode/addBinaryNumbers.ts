function addBinary(a: string, b: string): string {
    const sum: BigInt = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return sum.toString(2);
}

function addBinaryWithLoop(a: string, b: string): string {
    let sum = "";
    let carry = 0;
    let aLen = a.length - 1;
    let bLen = b.length - 1;
    while (aLen >= 0 || bLen >= 0) {
        let total = carry + parseInt(`${a[aLen] || 0}`) + parseInt(`${b[bLen] || 0}`)
        if (total == 3) {
            sum = `1${sum}`;
            carry = 1;
        } else if (total === 2) {
            sum = `0${sum}`;
            carry = 1;
        } else if (total === 1) {
            sum = `1${sum}`;
            carry = 0;
        } else {
            sum = `0${sum}`;
            carry = 0;
        }
        aLen--;
        bLen--;
    }
    if (carry === 1) sum = `1${sum}`;
    return sum;
}

export { addBinary, addBinaryWithLoop };