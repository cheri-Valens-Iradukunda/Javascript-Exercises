function squareSum(numbers){
  
  return numbers.length>0 ? numbers.reduce((curr,newVal)=>curr + Math.pow(newVal,2),0):0
}
console.log(squareSum([2, 1]))