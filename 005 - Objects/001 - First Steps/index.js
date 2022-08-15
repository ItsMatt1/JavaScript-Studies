let Tenis = {
    tipo: "Tenis Esportivo",
    cardaco: "G",
    estoque: false,

    marca: ["Nike", "Adidas"],

    getMarca: function (param) {
        return this.marca[param]
    }
}

console.log(Tenis)

console.log(Tenis.getMarca(1))
