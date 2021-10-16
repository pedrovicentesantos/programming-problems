const fizzBuzz = require('./fizzBuzz');

describe('FizzBuzz Problem', () => {
  test('should return number if not multiple of 3 or 5', () => {
    let n = 1;
    let result = fizzBuzz(n);
    expect(result).toEqual(n);
    n = 7;
    result = fizzBuzz(n);
    expect(result).toEqual(n);
    n = -7;
    result = fizzBuzz(n);
    expect(result).toEqual(n);
  });

  test('should return Fizz when multiple of 3', () => {
    let n = 3;
    let result = fizzBuzz(n);
    expect(result).toEqual('Fizz');
    n = 6;
    result = fizzBuzz(n);
    expect(result).toEqual('Fizz');
    n = -9;
    result = fizzBuzz(n);
    expect(result).toEqual('Fizz');
  });

  test('should return Buzz when multiple of 5', () => {
    let n = 5;
    let result = fizzBuzz(n);
    expect(result).toEqual('Buzz');
    n = 10;
    result = fizzBuzz(n);
    expect(result).toEqual('Buzz');
    n = -20;
    result = fizzBuzz(n);
    expect(result).toEqual('Buzz');
  });

  test('should return FizzBuzz when multiple of 3 and 5', () => {
    let n = 15;
    let result = fizzBuzz(n);
    expect(result).toEqual('FizzBuzz');
    n = 30;
    result = fizzBuzz(n);
    expect(result).toEqual('FizzBuzz');
  });

  test('should return number if zero', () => {
    const n = 0;
    const result = fizzBuzz(n);
    expect(result).toEqual(n);
  });
});
