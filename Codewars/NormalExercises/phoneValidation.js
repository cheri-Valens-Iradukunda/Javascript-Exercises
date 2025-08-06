let numberValidation = stringNumber => {
    let elemWithOutSpace = stringNumber.split(" ").join("").split("").filter(elem=>!/[_]/.test(elem))
    if(elemWithOutSpace.length == 10){
        if(stringNumber.split("").indexOf("_") == 2 && stringNumber.split("").lastIndexOf("_") == 6){
            return  true
        }else if(stringNumber.split("").indexOf(" ") == 2 && stringNumber.split("").lastIndexOf(" ") == 6){
            return true
        }else if(!stringNumber.includes(" ") || !stringNumber.includes("_")){
            return true
        }
        else{
            return true
        }
    }
         
}

console.log(numberValidation("1122334455"))
