'use strict';

const Teste = {
    tamanho: 45,
    estoque: true
}


Teste.tamanho = 42
Teste.foo = "ç"

console.log(Teste)
Teste.tamanho = 40

console.log(Teste)
Teste.tamanho = 55

console.log(Teste)

// USE  = Object.freeze() for const