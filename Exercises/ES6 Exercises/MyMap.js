
let newArr = []
let myMap = (arr, callback, times = 0) =>{
    console.log(arr, callback, times)
    
    if(times < arr.length){
       newArr.push(callback(arr,times))
       return myMap(arr,callback,times+=1)

    }
    else{
        return newArr
    }
}

// console.log(myMap([1,2,3,4,5],(arr, times)=>(arr[times]*2)))


// filter

Array.prototype.filtering = function(callback){
    let arr = []
    for(let i = 0;i<this.length;i++){
        if(callback(this[i])) arr.push(this[i])
        else continue
    }
    return arr
}
let arr = [1,2,3,4,5,6]
// console.log(arr.filtering(elem=>elem>3))

/// Reduce

Array.prototype.Reduce = function(callback){
    let value = [];

    for(let i = 0;i <this.length;i++){
        value.push(callback(this[i],i,this))
    }
    return value
}
console.log(arr.Reduce((curr,b)=> curr + b))