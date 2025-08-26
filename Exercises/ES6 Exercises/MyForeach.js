Array.prototype.myForEach = function(callback){
    let arr = this

    for(let i = 0;i<arr.length; i++){
        callback(arr[i],i,arr)
    }
    return undefined
}

let arr = [1,2,3,4,5]

let newArr = []

arr.myForEach((elem,index)=>{
    newArr.push(elem*index)
})

console.log(newArr)