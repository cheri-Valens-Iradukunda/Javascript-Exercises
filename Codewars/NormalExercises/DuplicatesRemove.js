let duplicatesRemove = arr =>arr.filter((elem,index,arr)=> index == arr.indexOf(elem))

console.log(duplicatesRemove([1,1,2,3,4,5,5,5,6,2,3,3,3]))