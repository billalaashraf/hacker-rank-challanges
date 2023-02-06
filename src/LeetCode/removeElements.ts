function removeElements(nums:number[], val:number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++
        }
        console.log(nums)
    }
    return count;
}

export default removeElements;