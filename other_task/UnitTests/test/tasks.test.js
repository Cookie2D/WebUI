const {sumOfNums, threeDigits} = require('../tasks')

describe('sumOfNums function: ', () => {
  test('should return the sum of the number digits', () => {
    expect(sumOfNums(0)).toBe(0);
    expect(sumOfNums(null)).toBe(0);
    expect(sumOfNums(undefined)).toBe(0);
    expect(sumOfNums(4)).toBe(4);
    expect(sumOfNums(45)).toBe(9);
    expect(sumOfNums(100)).toBe(1);
  })
  test("shouldn't return NaN", () => {
    expect(sumOfNums('1null')).not.toBeNaN();
    expect(sumOfNums('undefined')).not.toBeNaN();
    expect(sumOfNums(undefined)).not.toBeNaN();
  })
})

describe('threeDigits function: ',() => {
  test('should return true if number contains 3 same digits', () => {
    expect(threeDigits(4044)).toBeTruthy();
    expect(threeDigits(4046)).toBeFalsy();
    expect(threeDigits(null)).toBeFalsy();
    expect(threeDigits(undefined)).toBeFalsy();
  })
})