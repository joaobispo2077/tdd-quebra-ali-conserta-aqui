const fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz Puzzle', () => {

  test('should return 0 when receive 0', () => {
    const result = fizzbuzz(0);
    expect(result).toEqual(0);
  });

  test('should return Fizz when receive 3', () => {
    const result = fizzbuzz(3);
    expect(result).toEqual("Fizz");
  });

  test('should return Buzz when receive 5', () => {
    const result = fizzbuzz(5);
    expect(result).toEqual("Buzz");
  });

  test('should return Fizz Buzz when receive multiple of 3 & 5', () => {
    const result = fizzbuzz(30);
    expect(result).toEqual("FizzBuzz");
  });
});