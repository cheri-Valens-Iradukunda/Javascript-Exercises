function findUniq(words){
    let a= words[0]
    
    let filter = words.filter(word=>new Set([...a.toLowerCase()]).isSubsetOf(new Set([...word.toLowerCase()])) || new Set([...word.toLowerCase()]).isSubsetOf(new Set([...a.toLowerCase()])))
    
    if(filter.length ==1) return words[0]
    else{
        for(let i = 1;i < words.length; i++){
            let a = words[i]
            let filter = words.filter(word=>(new Set(...[a.toLowerCase()]).isSubsetOf(new Set(...[word.toLowerCase()])) || new Set(...[word.toLowerCase()]).isSubsetOf(new Set(...[a.toLowerCase()]))))
            if(filter.length == 1){
                return words[i]
            }
        }
    }
    
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))