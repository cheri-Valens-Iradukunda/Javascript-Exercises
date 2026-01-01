function stringTransformation(string, transformations) {
  transformations.map(elem=>{
    if(elem == "U"){string = string.toUpperCase()}
    if(elem == "L") {string = string.toLowerCase()}
    if(elem == "D"){string = string.split("")
      string = [...string,...string].sort().join("")}
    if(elem == "R"){string = string.split("").reverse().join("")}
  })
  return string
}


console.log(stringTransformation("abc",["D"]))