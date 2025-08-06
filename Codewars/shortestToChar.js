function shortesttoChar(s, c) {
  let newString = s.split(c)
  return newString.flatMap(elem=>{
    return elem.split("").map((element,index,arr)=>{
        console.log(element,index,element.length,(element.length) - index)


        return (arr.length) - index < index? (arr.length) - index: index+1
    })
  })

    

  
}
console.log(shortesttoChar("elovecodewars", "e"),)

