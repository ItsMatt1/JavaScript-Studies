const Tenis = {
    tamanho: 45,
    estoque: true,
    marca: "Adidas",
    secret: 123456
}

const { tamanho, estoque, marca = "Nao possui!" } = Tenis;

console.log(tamanho, estoque, marca)

const { secret: RandomNumber } = Tenis;

console.log(RandomNumber)