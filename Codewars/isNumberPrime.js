
function isPrime(num) {
  if(num < 2){
    return false
  }
  for(let i = Math.round((num/2));i>1;i--){
    if(num%i == 0) return false
  }
  return true
}
console.log(isPrime(9))