function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
    const n = a.length;
    const rotation = k % n;
    const result:number[] = [];
    a = reverseArray(a, 0, n-1);
    a = reverseArray(a, 0, rotation-1);
    a = reverseArray(a, rotation, n-1);

    for (let item of queries) {
        result.push(a[item])
    }

    return result;

}

function reverseArray(arr:number[], start:number, end:number): number[] {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

export default circularArrayRotation