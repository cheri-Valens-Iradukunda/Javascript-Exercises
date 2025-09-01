function checkThreeAndTwo(array) {
  let set = new Set(array)
  let three = false;
  let two = false;
  [...set].map(elem=>{
      if(array.filter(element=>element == elem).length ==3){
          three = true
      }
      else if(array.filter(element=>element == elem).length ==2){
          two = true
      }
  })
  return three && two
}