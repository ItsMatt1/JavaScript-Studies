//PUSH coloca o item no final
//POP remove o ultimo item 
//SHIFT remove item do inicio
//UNSHIFT coloca o item no inicio
//SLICE pega os dados de um array dado um range
//SPLICE remove os dados de um array dado um range

let arr = [1, 2, 3, 4, 5]

arr.push(6)

arr.unshift(0)

// console.log(arr)

arr.shift()

// console.log(arr)

arr.pop()

// console.log(arr)

let arrayTeste = arr.slice(0, 3)

console.log(arrayTeste)