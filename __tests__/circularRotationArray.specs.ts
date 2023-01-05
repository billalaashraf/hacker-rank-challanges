import circularArrayRotation from '../src/circularArrayRotation';

describe('test circularArrayRotation of function', () => {
    it('should return [2,3,1] when [1,2,3] is passed with 2 rotation and quries [0,1,2]',  () => {
        expect(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])).toEqual([2,3,1]);
    })

    it('should return [4,5,6] when [1,2,3,4,5,6] is passed with 3 rotation and quries [0,1,2]',  () => {
        expect(circularArrayRotation([1,2,3,4,5,6], 3, [0, 1, 2])).toEqual([4,5,6]);
    })
})