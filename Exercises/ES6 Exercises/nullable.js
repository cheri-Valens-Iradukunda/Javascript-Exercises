let nullable = obj => {
    let newObj = {}
    for(let key in obj){
        if(obj[key] == null){
            newObj[key] = 0
        }
        else if(obj[key] == undefined){
            newObj[key] = " "
        }else{
            newObj[key] = obj[key]
        }
    }
    return newObj

}
console.log(nullable({name:null,age: 10}))