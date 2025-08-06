function parent(){
    let counter = 0

    let inner = () => {
        return counter++
    }
    return inner
}

let parentVariable = parent()

console.log(parentVariable())
