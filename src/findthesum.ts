const input = [3, 1, -7, 11, 9];
const sum = 12;

function findSum (arr:number[], num:number):number[] {
    for (let i = 0; i < arr.length; i++) {
        const first = arr[i];
        const reminder = num - first;
        for (let j = i+1; j < arr.length; j++) {
            if (reminder === arr[j]) {
                return [first, arr[j]];
            }
        }
    }
    return [];
}

console.log(findSum(input, sum));

