function generatePairs(n) {
  let arr = []
  
  for(let i = 0;i<=n;i++){
        for(let j = i;j<=n;j++){
            arr.push([i,j].sort((a,b)=>a-b))
        }
  }
  return arr
}
console.log(generatePairs(2))