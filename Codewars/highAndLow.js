function highAndLow(numbers){
  numbers = numbers.split(" ").map(Number)
  console.log(numbers)
  console.log([Math.min(...numbers),Math.max(...numbers)].join(" "))

  return [Math.max(...numbers),Math.min(...numbers)].join(" ")
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
