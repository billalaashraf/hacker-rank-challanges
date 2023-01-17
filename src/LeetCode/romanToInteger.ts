const romanmap: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function romanToInt(s: string): number {
    let r = 0
    let last = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i]
        const digit = romanmap[char];
        if (digit < last) {
            r -= digit;
        } else {
            r += digit;
            last = digit;
        }

    }
    return r;
};

export default romanToInt;