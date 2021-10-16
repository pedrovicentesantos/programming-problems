# Problema

O problema proposto consiste em unir vários arrays em uma única saída, usando a chave `id` como identificador de cada pessoa no array.
Os dados duplicados, como `id` e `nome` devem ser removidos.

O objetivo é sair de:

```javascript
const arr1 = [
  ["name", "id", "age", "weight", "Cool"],
  ["Susan", "3", "20", "120", true],
  ["John", "1", "21", "150", true],
  ["Bob", "2", "23", "90", false],
  ["Ben", "4", "20", "100", true]
];

const arr2 = [
  ["name", "id", "height"],
  ["Bob", "2", "50"],
  ["John", "1", "45"],
  ["Ben", "4", "43"],
  ["Susan", "3", "48"]
];

const arr3 = [
  ["name", "id", "parent"],
  ["Bob", "2", "yes"],
  ["John", "1", "yes"]
];

```

E chegar em uma saída similar a:
 ```javascript

const result = [
	["name", "id", "age", "height", "parent"],
	["Susan", "3", "20", "48", ""],
	["John", "1", "21", "45", "yes"],
	["Bob", "2", "23", "50", "yes"],
	["Ben", "4", "20", "43", ""]
]

 ```

## Instalação 

Para testar o código, basta clonar o repositório, acessar a pasta do mesmo e rodar o comando `node script.js`:

```bash

git clone https://github.com/pedrovicentesantos/javascript-array-problem
cd javascript-array-problem

node script.js

```