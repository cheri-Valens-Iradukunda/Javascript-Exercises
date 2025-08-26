function smallestWord(sentence){
    sentence = sentence.split(" ")

    let map = new Map()
    sentence.forEach(elem=>{
        map.set(elem,elem.length)
    })

    return [...map.entries(map)].sort((a,b)=>a[1]-b[1])[0][1]
    
}

console.log(smallestWord("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, dolores."))
