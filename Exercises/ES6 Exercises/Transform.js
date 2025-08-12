let obj = {
    'firstname': "iradukunda",
    'lastname': "valens"
}

function transformFunc(objParam){
    obj = {}
    for(let key in objParam){
        obj[key.toUpperCase()] = objParam[key]

    }
    return obj
}

console.log(transformFunc(obj))




