function isPalindrome(x: number): boolean {
    const sx =Number(x.toString().split("").reverse().join(""));
    return sx === x;
};

export default isPalindrome