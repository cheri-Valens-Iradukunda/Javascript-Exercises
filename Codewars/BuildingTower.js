vaScript:
function towerBuilder(nFloors) {
  let sign = 1
  let space = nFloors-1
  let resultArr = []
  for(let i = 1;i<=nFloors;i++){
    resultArr.push(" ".repeat(space)+ "*".repeat(sign)+" ".repeat(space))
    sign+=2
    space--
  }
  return nFloors>1?resultArr:["*"]
}