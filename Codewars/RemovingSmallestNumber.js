function removeSmallest(numbers) {
  let smallest = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_,index)=>index!==smallest)


}
console.log(removeSmallest([ 208, 6, 164, 48, 99, 371, 255, 260, 211, 249, 108 ]))
