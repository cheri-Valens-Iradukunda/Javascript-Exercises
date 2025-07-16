//splitting the parameter
//mapping through array of all elements
//get first letter of element
//get other letters that remains
//concatenate it from the other letters + first letter + ay
//return it
let pigIt = (word) => {

    word = word.split(" ")

    return word.map(elem=>{
        if(elem == "!"){
            return elem
        }

        return elem.slice(1) + elem.slice(0,1) + "ay"

    }).join(" ")

}
console.log(pigIt('Pig latin is cool Quis'))