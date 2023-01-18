function longestCommonPrefix(strs: string[]): string {
    if (!strs[0] || strs.length === 1) return strs[0] || "";
    let i = 0;
    while(strs[0][i] && strs.every(word => word[i] === strs[0][i]))
        i++;
    return strs[0].slice(0, i);
};

export default longestCommonPrefix;