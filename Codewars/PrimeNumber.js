
function getPrimes(start, finish) {
    if(start>finish){
        let other = finish
        finish = start
        start = other
    }
    console.log(start,finish)
    let arr = []
    for(let i = start;i<=finish;i++){
        
        let isNumber = isPrime(i)
        if(isNumber){
            arr.push(i)
        }
    }
  return arr.join(",")
}
console.log(getPrimes(40,20))
