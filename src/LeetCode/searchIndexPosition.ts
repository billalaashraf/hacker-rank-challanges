function searchIndex(nums: number[], target:number): number {
    let start = 0;
    let end = nums.length;
    const mid = Math.ceil(end/2)
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
        start = mid + 1;
    } else if (target < nums[mid]) {
        end = mid;
    }
    while (start < end) {
        if (nums[start] >= target) {
            return start;
        } else if (start === end && nums[start] !== target) {
            return (target < nums[start]) ? start - 1 : start + 1;
        }
        start++;
    }

    return start;
}

export default searchIndex;