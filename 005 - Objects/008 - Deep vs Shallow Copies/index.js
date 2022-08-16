function cloneObject(objc) {
    return JSON.parse(JSON.stringify(objc))
}


let Tenis = {
    tamanho: 45,
    estoque: true
}

let clone1 = JSON.stringify(Tenis)
clone1 = JSON.parse(clone1)

// clone1 = JSON.parse(JSON.stringify(Tenis))

console.log(clone1)