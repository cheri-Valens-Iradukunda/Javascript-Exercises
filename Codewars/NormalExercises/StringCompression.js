function stringCompression(word){
    word = word.split("")
    let newWord = ""
    let newEl = 1
    word.forEach((elem,index,arr)=>{
        if(elem == arr[index+1]){
            newEl++
        }else{
            newWord +=elem+newEl
            newEl=1
        }
    })
    return newWord
}

console.log(stringCompression("aaaaabbbbAAAcccc"))