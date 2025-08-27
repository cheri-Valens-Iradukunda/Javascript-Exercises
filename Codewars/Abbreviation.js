function abbreviate(string) {
    string = string.split(" ")
    
    return string.map(element=>{
        element = element.split("")
        let elem = element.filter(ele=>/[a-zA-z]/.test(ele))
        let firstLetter = elem.splice(0,1)
        let lastLetter = elem.splice((elem.length-1),1)
        
        return `${firstLetter}${elem.length>0?elem.length:""}${lastLetter}${element.filter(ele=>!/[a-zA-Z]/.test(ele))}`
    }).join(" ")
    
}

console.log(abbreviate("elephant-rides are really on fun!"));

let abbreviate = (string) =>{
   return string.replace(/[a-z]{4,}/gi, (elem)=>{
       return `${elem[0]}${elem.length-2}${elem[elem.length-1]}`
   })
}
console.log(abbreviate("elephant-rides are really on fun!"));