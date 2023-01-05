function gradingStudents(grades: number[]): number[] {
    const result: number[] = [];
    for (const item of grades) {
        if (item < 38) {
            result.push(item)
        } else {
            const dividant = Math.floor(item / 5) + 1;
            const upper = dividant * 5;
            result.push((upper - item) < 3 ? upper : item)
        }
    }

    return result;

}

export default gradingStudents;