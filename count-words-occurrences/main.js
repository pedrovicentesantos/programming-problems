const word = 'Lorem dolor ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores, voluptatum qui nemo porro provident quod sit nisi quibusdam quae, fugit repellendus, non ipsam eveniet recusandae. Perferendis quibusdam obcaecati commodi.';

const space = ' ';
const cleanWord = word.replace(/[^\w\s\d]/g, '');
const wordList = cleanWord.split(space);

// Implementation with Object
const countObject = {};

wordList.forEach((value) => {
  countObject[value] = countObject[value] ? countObject[value] + 1 : 1
});

console.log(countObject);

// Implementation with Map
const countMap = new Map();

wordList.forEach((value) => {
  value = value.toLowerCase();
  countMap.has(value) ? countMap.set(value, countMap.get(value) + 1) : countMap.set(value, 1);
});

console.log(countMap);

// Search occurrences in Map
let searchWord = 'lorem';
searchWord = searchWord.toLowerCase();

if (countMap.has(searchWord)) console.log(countMap.get(searchWord));

// Get unique words
const uniqueWords = new Set(wordList);

console.log(uniqueWords);