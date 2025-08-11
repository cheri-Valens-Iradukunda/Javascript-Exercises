function areaCalculation( height){
    return height* this.width
}

// let newFunction = areaCalculation.bind(null,10)

// console.log(newFunction(5))

function maxFinding(arr){
    return Math.max(...this.arr)
}
// console.log(maxFinding.call(null,[1,2,3,4,5,6]))

function capitalization(){
    return [this.name.charAt(0).toUpperCase(), this.name.split("").slice(1).join("")].join("")
}
// console.log(capitalization("john"))
let obj = {
    width: 5,
    arr:[1,2,3,4,5],
    name:"john"
}
let newFunction = areaCalculation.bind(obj,10)
console.log(newFunction())
let newMaxFinding = maxFinding.call(obj)
console.log(newMaxFinding)
let newCapitalization = capitalization.call(obj)
console.log(newCapitalization)