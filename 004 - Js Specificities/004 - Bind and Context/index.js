const lanches = {
    cardapio: [
        {
            nome: "x-salada", preco: 30
        },
        {
            nome: "x-tudo", preco: 40
        },
    ],
    meuPedidoFunc: function () {
        setTimeout(
            function () {
                console.log(this.cardapio)
                console.log(this)
            }.bind(this), 1000);
    }
}

lanches.meuPedidoFunc()