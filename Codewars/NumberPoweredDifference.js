function differenceOfSquares(n) {
  let sum1 = Math.pow(Array.from({length: n}, (_,a)=>a+1).reduce((a,b)=>a+b),2)
  let sum2 = Array.from({length: n}, (_,a)=>a+1).reduce((a,b)=>a+Math.pow(b,2))
  return sum1-sum2
}

console.log(differenceOfSquares(10))

