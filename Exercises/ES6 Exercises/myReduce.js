Array.prototype.Reduce = function(callback,startingPoint = 0){
    let value = startingPoint;

    for(let i = 0;i <this.length;i++){
        value = callback(value, this[i])
    }
    return value
}
let arr = [1,2,3,4,5]
console.log(arr.Reduce((curr,b)=> curr + b,5))