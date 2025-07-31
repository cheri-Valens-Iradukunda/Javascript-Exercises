function persistence(num, count = 0) {
    if(num<10) return count
  let allNumber = num.toString().split("").map(Number).reduce((a,b)=>a*b)
  
  if(allNumber>=10){
      return persistence(allNumber,count+1)
  }
  return count+1
  
  
}