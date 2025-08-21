// function innerFunction(total,arr){
    
// }

function getMostProfitFromStockQuotes(quotes) {
  let max = 0
  let total = 0
  let newArr = [...quotes]
  let sortedQuoted = [...quotes]
  let index = newArr.indexOf(sortedQuoted.sort((a,b)=>b-a)[0])
  let slicedArr = newArr.slice(0,index+1)
  let remainingArr = newArr.slice(index+1)
  while(slicedArr.length != 0){

        max = slicedArr[slicedArr.length-1]

        for(let i = 0;i<slicedArr.length;i++){
          total += max-slicedArr[i]
        }
        console.log('before')
        console.log('cliced arr',slicedArr)
        console.log("remaining arr",remainingArr)
        newArr = [...remainingArr]
        index = remainingArr.indexOf(newArr.sort((a,b)=>b-a)[0])
        console.log("remaining Index", index)
        if(index==0) break

        slicedArr = remainingArr.slice(0,index+1)
        remainingArr = slicedArr.slice(index+1)
        console.log('after')

        console.log('cliced arr',slicedArr)
        console.log("remaining arr",remainingArr)
  }
  return total
}
let arr = [1009,1007,993,958,950,938,929,908,898,890,880,876,860,848,848,834,823,815,793,780,770,759,720,719,708,702,693,684,678,677,660,653,650,646,642,624,598,597,583,578,573,567,549,545,536,536,531,531,530,529,525,524,521,515,515,514,510,505,483,475,451,448,444,441,426,420,404,402,393,369,368,364,355,345,339,333,324,321,302,290,287,261,246,240,205,205,189,181,160,158,151,149,144,128,126,123,114,111,100,96,95,90,57,49,41,21,19,16]
console.log(getMostProfitFromStockQuotes(arr))





