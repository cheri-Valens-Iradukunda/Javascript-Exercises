function duplicateCount(text){
  //...
  return new Set(text.toLowerCase().split("").filter((e,index,arr)=>arr.indexOf(e) !== arr.lastIndexOf(e))).size
}