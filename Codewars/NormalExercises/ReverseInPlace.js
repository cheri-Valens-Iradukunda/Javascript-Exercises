function reverseInPlace(word){
    return word.split(" ").map(elem=>elem.split("").reverse().join("")).join(" ")
}

console.log(reverseInPlace("hello world the"))