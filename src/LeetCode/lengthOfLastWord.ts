function lengthOfLastWord(s: string): number {
    const n = s.length;
    let wordlength = 0;
    let wordfound = false;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            wordfound = true;
            wordlength++;
            continue;
        } else if (wordfound) {
            break;
        }
    }
    return wordlength;
}

export default lengthOfLastWord;