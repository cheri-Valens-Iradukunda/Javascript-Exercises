function firstNonRepeatingLetter(s) {
  let newArr = []
  s.toLowerCase().split("").forEach((elem,index,arr)=>{
    if(arr.indexOf(elem) == arr.lastIndexOf(elem)) newArr.push(index)
  })
  return newArr.length == 0?"":s.charAt(newArr[0])
}
console.log(firstNonRepeatingLetter("valenSvalen"))