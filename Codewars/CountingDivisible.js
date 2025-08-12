function reverse(arr) {
   let newArr = []
   let i = true
   let index = 0

   while(i== true){
    if(arr[index] != undefined){
        index++
    }
    else{
        i= false
    }
   }
   while(index>=0){
    if(arr[index] != undefined){
        newArr.push(arr[index])
        index--
    }
    else{
        index--
    }
   }
  return newArr
}
console.log(reverse(['hello','world','how','are','you','?']))

