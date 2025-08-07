function Snake_case(word){
    return word.split("").map(elem=>elem == elem.toUpperCase()?`_${elem.toLowerCase()}`: elem)
}

function Camel_case(word){
    word = word.split("")

    let newWord = ""
    let isPosition = false
    for(let i = 0; i<word.length;i++){
        if(word[i]== "-" || word[i] == '_'){
            isPosition = true
            continue
        }
        if(isPosition){
            newWord += word[i].toUpperCase()
            isPosition = false
        }else{
            newWord+=word[i]
        }
    }
    // word.forEach(elem=>{
    //     if(elem == "-"){
    //         isPosition = true
    //     }
    //     if(isPosition){
    //         newWord += elem.toUpperCase()
    //         isPosition = false
    //     }else{
    //         newWord+=elem
    //     }
    // })
    return newWord

}

function Kebab_case(word){
    word =  word.replace(/_/g,"-")
    let newWord = ""
    word.split("").forEach((elem,index,arr)=>{
        if(elem == elem.toUpperCase() && arr[index-1] != "-" && arr[index] != "-"){
            newWord += `-${elem.toLowerCase()}`
        }
        else{
            newWord += `${elem.toLowerCase()}`
        }
    })
    return newWord
}


function changeCase(identifier, targetCase) {
    let casesArr = ['snake','camel','kebab']
    let functions = [Snake_case,Camel_case,Kebab_case]
    let newValue = ""
    if(!casesArr.includes(targetCase)){
      return undefined
    }
    if(casesArr.includes(targetCase)){
        console.log(functions[casesArr.indexOf(targetCase)](identifier))
        newValue = functions[casesArr.indexOf(targetCase)](identifier)
    }
    return newValue;
}

console.log(changeCase("little_shop_of_horrors", "camel"))