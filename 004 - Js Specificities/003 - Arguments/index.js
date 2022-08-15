function input() {
    return arguments;
}

console.log(input("Up", "Up", "Enter"))

const subtracao = (num = 0, num2 = 0) => {
    if (typeof num === "number" && typeof num2 === "number") {
        return num - num2
    }
    return "Impossivel"
}

console.log(subtracao('1', 2))