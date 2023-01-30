const input = [3, 1, -7, 11, 9];
const sum = 12;

function findSum (arr:number[], num:number):number[] {
    let s = new Set()
    for (let i=0; i < arr.length; i++) {
        let remainder = num - arr[i];
        if (s.has(remainder)) {
            return [i, arr.indexOf(remainder)]
        }
        s.add(arr[i])
    }
    return [];
}

export default findSum;

