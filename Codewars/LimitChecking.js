let count = -1
function smallEnough(a, limit){
  count++
  return a[count] < limit && count < a.length? smallEnough(a,limit): count>=a.length? true:false
}

console.log(smallEnough([6,1,8,2,9,9,8,3,8,5,2,1,0,4,4,4,6,4,0,4], 6))