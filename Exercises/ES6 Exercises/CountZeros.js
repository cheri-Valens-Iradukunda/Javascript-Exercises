function countingZerors(n){
    let zeros = 0
    let i = 10

    while(i<=n){
        zeros += Math.floor(n/i)
        i*=10
    }

    return zeros

}
console.log(countingZerors(1000))

