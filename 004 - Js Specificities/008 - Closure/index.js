function WhatsYourName(name) {
    const msg = `Your name is:`

    function YourName() {
        return `${msg} ${name}`
    }

    return YourName()
}

console.log(WhatsYourName("Matheus"))

// console.log(WhatsYourName("Matheus").YourName())    DOESNT WORK CUZ ITS CLOSURE'D