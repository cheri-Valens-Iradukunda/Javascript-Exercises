function gcd(a,b){
    a>b?[a,b] = [a,b]: [a,b]= [b,a]

    for(let i = b;i>0;i--){
        if(a%i == 0 && b%i == 0){
            return i
        }
    }
}

console.log(gcd(12,6))