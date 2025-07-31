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

//calculating the length of array

//find the modulus of the second parameter and array length

//moving the number of items that are same as the modulus to the starting point

function rotate(arr,len){
    if(len >=0){
        let itemsToLotate = arr.length > len? len: len%arr.length
        console.log(itemsToLotate)
        return [...arr.slice(arr.length-itemsToLotate),...arr.slice(0,(arr.length-itemsToLotate))]
    }
    
        let itemsToLotate = arr.length > -(len)? -(len): -(len)%arr.length
        
        return [...arr.slice(itemsToLotate),...arr.slice(0,itemsToLotate)]


}

// console.log(rotate([1, 2, 3, 4, 5], -5))


// console.log("valene".filter(elem=>elem=="e"))
// console.log('iradukunda valens'.split(" " && ""))
let arr = ["a","d","u"]
let regEx = new RegExp(`[${arr.join("")}]`)
console.log("iradukunda valens".split("").filter(elem=>elem.match(regEx)))

