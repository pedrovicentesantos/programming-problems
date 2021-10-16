// Depende do campo id estar na posição 1
// porém funciona se adicionar qualquer novo dado
const arr1 = [
  ["name", "id", "age", "weight", "Cool"],
  ["Susan", "3", "20", "120", true],
  ["John", "1", "21", "150", true],
  ["Bob", "2", "23", "90", false],
  ["Ben", "4", "20", "100", true]
];

const arr2 = [
  ["name", "id", "height","programmer"],
  ["Bob", "2", "50",true],
  ["John", "1", "45",true],
  ["Ben", "4", "43",true],
  ["Susan", "3", "48",false]
];

const arr3 = [
  ["name", "id", "parent"],
  ["Bob", "2", "yes"],
  ["John", "1", "yes"]
];

function makeHeader(arr) {
  const [header, ...data] = arr;
  return header
}

const allHeaders = [
  ...makeHeader(arr1),
  ...makeHeader(arr2),
  ...makeHeader(arr3)
]

const headers = allHeaders.reduce((accumulator, currentValue) => {
  if (accumulator.includes(currentValue)) {
    return accumulator
  }
  return [...accumulator, currentValue]
}, []);

let results = [headers];

function makeResult(arr) {
  const [header, ...allData] = arr;

  results = allData.reduce((accumulator, currentValue) => {
    const index = accumulator.findIndex((value) => {
      return currentValue[1] === value[1]
    });
    
    const row = currentValue.reduce((acc, current, currentIndex) => {
      if (index >= 0) {
        // Ignorar o nome e id
        if (currentIndex > 1) {
          return [...acc, current]
        }
      } else {
        return [...acc, current]
      }
      return acc
    }, []);

    if (index >= 0) {
      accumulator[index].push(...row)
      return accumulator
    }
    return [...accumulator, row]
  }, results);

}

makeResult(arr1);
makeResult(arr2);
makeResult(arr3);
console.log(results);
console.table(results);

// Versão que passa o array para um objeto
// e usa as chaves dos objetos para identificar a pessoa
function parseArrayAsObject(arr) {
  const [headers, ...data] = arr;
  return data.reduce((accumulator, currentValue) => {
    const temp = {};
    for (const [index, header] of headers.entries()) {
      temp[header] = currentValue[index];
    }
    return [...accumulator, temp]
  },[]);
}

const allData = [
  ...parseArrayAsObject(arr1),
  ...parseArrayAsObject(arr2),
  ...parseArrayAsObject(arr3)
]

const result = allData.reduce((accumulator, currentValue) => {
  const index = accumulator.findIndex((value) => {
    return value['id'] === currentValue['id']
  });
  if (index >= 0) {
    accumulator[index] = {
      ...accumulator[index],
      ...currentValue
    }
    return accumulator
  }
  return [...accumulator, currentValue]
},[]);

console.log(result);
console.table(result);