function addAll(numbers) {
    let newArr = []
    numbers = numbers.sort((a,b)=>a-b)
    for(let i = 1;i<numbers.length;i++){
        if(i == 1) newArr.push(numbers[0]+numbers[1])
        else{
            newArr.push(newArr[newArr.length-1]+numbers[i])
            newArr.sort((a,b)=>a-b)
        } 
    }
    return newArr.reduce((a,b)=>a+b)
}

function addAll(arr) {
  let cost = 0;
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    let sum = arr[0] + arr[1];
    cost += sum; 
    arr.splice(0, 2, sum);
  }
  return cost;
}

