function isPangram(string){
  return string.toLowerCase().match(/[a-z]/g).size == 26

  
}
let output = isPangram("The quick brown fox jumps over the lazy dog")
console.log(output)
