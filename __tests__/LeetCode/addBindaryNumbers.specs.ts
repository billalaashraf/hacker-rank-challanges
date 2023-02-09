import { addBinary, addBinaryWithLoop } from '../../src/LeetCode/addBinaryNumbers';

describe('addBinary - Function', () => {
    it('should return 0 if 0 and 0 is passed', () => {
        expect(addBinary('0', '0')).toEqual('0');
        expect(addBinaryWithLoop('0', '0')).toEqual('0');
    })

    it('should return 1 if 0 and 1 is passed', () => {
        expect(addBinary('0', '1')).toEqual('1');
        expect(addBinaryWithLoop('0', '1')).toEqual('1');
    })

    it('should return 100 if 11 and 1 is passed', () => {
        expect(addBinary('11', '1')).toEqual('100');
        expect(addBinaryWithLoop('11', '1')).toEqual('100');
    })

    it('should return 1011 if 100 and 111 is passed', () => {
        expect(addBinary('100', '111')).toEqual('1011');
        expect(addBinaryWithLoop('100', '111')).toEqual('1011');
    })

    it('should return 10100 if 1011 and 1001 is passed', () => {
        expect(addBinary('1011', '1001')).toEqual('10100');
    })

    it('should return 110000 if 10101 and 11011 is passed', () => {
        expect(addBinary('10101', '11011')).toEqual('110000');
    })
});