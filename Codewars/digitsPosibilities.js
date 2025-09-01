function digits(num){
  let sum = []
  num = num.toString().split("").map(Number)
  console.log(num)
  num.forEach((elem,index)=>{
    for(let i= index+1;i<num.length;i++){
      sum.push(elem+num[i])
    }
  })
  return sum
}