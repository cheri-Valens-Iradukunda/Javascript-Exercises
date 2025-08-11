function Gcd(num1,num2){
    let gcd = num1>num2?num2:num1
    
    for(let i = gcd;i>=1;i--){
        if(num1%i === 0 && num2%i === 0){
            gcd = i
            break
        }
    }
    return gcd
}
console.log(Gcd(12,18))