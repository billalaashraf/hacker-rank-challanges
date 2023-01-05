import gradingStudents from '../src/gradingStudents'

describe('test gradingStudents function', () => {
    it('should return [75, 67, 40, 33] when [73, 67, 38, 33] is passed', () => {
        expect(gradingStudents([73, 67, 38, 33])).toEqual( [75, 67, 40, 33]);
    })

    it('should return [80, 77, 40, 40, 56, 75, 90, 23] when [79, 77, 38, 39, 56, 74, 89, 23] is passed', () => {
        expect(gradingStudents([79, 77, 38, 39, 56, 74, 89, 23])).toEqual([80, 77, 40, 40, 56, 75, 90, 23]);
    })
})