function ArrayStats(arr){
    let sum = arr.reduce((current,newValue)=>current+newValue)
    return { sum, "average": sum/arr.length,"min":Math.min(...arr),"max": Math.max(...arr)}
}

console.log(ArrayStats([1,2,3,4,5,6,7,8,9,10]))