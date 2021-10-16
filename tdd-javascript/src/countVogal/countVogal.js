const countVogal = (str) => {
  if (typeof (str) !== 'string') return null;
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (const letter of str) {
    if (vogais.includes(letter.toLowerCase())) counter++;
  }
  return counter;
};

module.exports = countVogal;
