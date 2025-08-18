function onlyDuplicates(str) {
  // your code here
  console.log([...str])
  return [...str].filter((elem,index,arr)=>arr.indexOf(elem) != arr.lastIndexOf(elem)).join("")
}

console.log(onlyDuplicates("aaabcdd"))