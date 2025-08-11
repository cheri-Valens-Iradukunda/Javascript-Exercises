function sortString(string,ordering) {
    if(ordering == "") return string
    string = string.split('')
    ordering = ordering.split("")

    let newArr = []

    ordering.forEach(elem=>{
        newArr = newArr.concat(string.filter(element=>element == elem))
    })
    newArr = newArr.concat(string.filter(elem=>!newArr.includes(elem)))
    return newArr.join("")

}
console.log(sortString("hrhambvyujqqndoy", "hrambvyujqndoy"))
