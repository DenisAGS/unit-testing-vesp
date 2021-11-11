import { area } from './area';

describe('area', () => {
    // #1
    it('should calculate the area with base 5 and 10, height 12', () => {
        const base1 = 5;
        const base2 = 10;
        const altura = 12;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(90);
    })
 
    // #2
    it('should calculate the area with base 15 and 20, height 30', () => {
        const base1 = 15;
        const base2 = 20;
        const altura = 30;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(525);
    })

    // #3
    it('should calculate the area with base -2 and 4, height 6', () => {
        const base1 = -2;
        const base2 = 4;
        const altura = 6;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(6);
    })

    // #4
    it('should calculate the area with base 1.5 and 2, height 3', () => {
        const base1 = 1.5;
        const base2 = 2;
        const altura = 3;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(5.25);
    })

    // #5
    it('should calculate the area with base 6 and 10, height 12', () => {
        const base1 = 6;
        const base2 = 10;
        const altura = 12;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(96);
    })

    // #6
    it('should calculate the area with base 8 and 15, height 20', () => {
        const base1 = 8;
        const base2 = 15;
        const altura = 20;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(230);
    })

    // #7
    it('should calculate the area with base 10 and 14, height 25', () => {
        const base1 = 10;
        const base2 = 14;
        const altura = 25;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(300);
    })

    // #8
    it('should calculate the area with base 4 and 6, height 9', () => {
        const base1 = 4;
        const base2 = 6;
        const altura = 9;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(45);
    })

    // #9
    it('should calculate the area with base 2 and 4, height 8', () => {
        const base1 = 2;
        const base2 = 4;
        const altura = 8;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(24);
    })

    // #10
    it('should calculate the area with base 15 and 20, height 30', () => {
        const base1 = 10;
        const base2 = 5;
        const altura = 4;
        const result = altura * (base1 + base2) / 2;
        expect(result).toBe(28);
    })
})