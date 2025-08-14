function sumArray(array) {
  if(array.length < 2) return 0
  array.splice(array.indexOf(Math.min(...array)),1)
  array.splice(array.indexOf(Math.max(...array)),1)

  return array.reduce((a,b)=>a+b,0)
}


// console.log(sumArray([1,2,3,4,5]))

let arr = new Array("valens")

// console.log(arr)
var a = 2, b = 3

[a,b] = [b,a]


console.log(a,b)
