let oddSquares = arr => arr.filter(elem=>elem%2!==0).map(elem=>Math.pow(elem,2))

console.log(oddSquares([10, 15, 20, 25, 30]))