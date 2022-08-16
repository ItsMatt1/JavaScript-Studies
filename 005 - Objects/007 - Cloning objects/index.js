let Tenis = {
    tamanho: 45,
    estoque: true
}

let link = { link: { a: "a", b: { c: "c" } } }

let clone1 = Tenis
// console.log(clone1)

let mesclar1 = Object.assign(Tenis, link)

// console.log(mesclar1)

let mesclar2 = { ...Tenis, ...link }
console.log(mesclar2)

//OBS: WATCHOUT WHEN CLONING OBJECT, IF YOU CHANGE A VALUE OF THE CLONE, PROPRABLY IT WILL CHANGE THE ORIGINAL TOO