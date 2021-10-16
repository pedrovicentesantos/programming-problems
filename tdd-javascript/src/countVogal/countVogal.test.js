const countVogal = require('./countVogal');

describe('CountVogal Problem', () => {
  test('should return null if input is not a string', () => {
    let word = 1;
    let result = countVogal(word);
    expect(result).toEqual(null);
    word = [1, 2];
    result = countVogal(word);
    expect(result).toEqual(null);
  });
  test('should count lowercase vowels', () => {
    let word = 'Lorem';
    let result = countVogal(word);
    expect(result).toEqual(2);
    word = 'xyz';
    result = countVogal(word);
    expect(result).toEqual(0);
  });
  test('should count vowels in sentences', () => {
    const word = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.';
    const result = countVogal(word);
    expect(result).toEqual(20);
  });
  test('should count uppercase vowels', () => {
    let word = 'LOREM';
    let result = countVogal(word);
    expect(result).toEqual(2);
    word = 'XTZ';
    result = countVogal(word);
    expect(result).toEqual(0);
  });
  test('should count uppercase and lowercase vowels', () => {
    let word = 'Ontem';
    let result = countVogal(word);
    expect(result).toEqual(2);
    word = 'Ontem. Hoje!';
    result = countVogal(word);
    expect(result).toEqual(4);
  });
  test('should work with words that have accents', () => {
    let word = 'Amanhã';
    let result = countVogal(word);
    expect(result).toEqual(3);
    word = 'Amanhã, possível! Canção.';
    result = countVogal(word);
    expect(result).toEqual(9);
  });
  test('should return 0 for empty strings', () => {
    const word = ' ';
    const result = countVogal(word);
    expect(result).toEqual(0);
  });
});
