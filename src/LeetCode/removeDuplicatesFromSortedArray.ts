
function removeDuplicates(input: number[]): [number, any[]] {
    let count = 0;
    let removed: (string | number)[] = input; 
    for (let index = 0; index < input.length; index++) {
        const now = removed[index];
        const next = removed[index + 1];
        if (next === '_') break;
        if (now === next) {
            removed.splice(index + 1, 1);
            removed.push('_');
            count++;
        }
        
    }
    return [count, removed];
}

export default removeDuplicates;