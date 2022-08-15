const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 123456,
    n: 5,
    link: { a: "a é = a", b: { c: "C é = c" } }
}

console.log(Tenis.hasOwnProperty("teste"))
console.log(Tenis.hasOwnProperty("estoque"))

console.log("tamanho" in Tenis)