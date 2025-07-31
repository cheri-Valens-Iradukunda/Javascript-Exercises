let pigIt = (word) => {

    word = word.split(" ")

    return word.map(elem=>{
        if(elem == "!"){
            return elem
        }

        return elem.slice(1) + elem.slice(0,1) + "ay"

    }).join(" ")

}
console.log(pigIt('Pig latin is cool Quis'));