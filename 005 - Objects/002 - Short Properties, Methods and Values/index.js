function Tenis(tamanho, estoque, preco) {
    return {
        tamanho: tamanho,
        estoque: estoque,
        preco: preco
    }
}

console.log(Tenis(35, true, "R$ 300"))

function Tenis(tamanho, estoque, preco) {
    return {
        tamanho,
        estoque,
        preco
    }
}

console.log(Tenis(35, true, "R$ 300"))

const tamanho2 = 35
const estoque2 = true
const preco2 = "R$ 300"

const Tenis2 = {
    tamanho2,
    estoque2,
    preco2
}

console.log(Tenis2)

const Tenis3 = {
    getTamanho2() {
        return 35
    }
}

console.log(Tenis3.getTamanho2())