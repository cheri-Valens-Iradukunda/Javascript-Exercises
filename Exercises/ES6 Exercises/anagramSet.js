
console.time("object insertion")

let obj = {}

for(let i=1;i<=100000;i++){
    obj["text"+i] = i
}
console.time("end of object insertion")
console.time("map insertion")
let map = new Map()

for(let i=1;i<=100000;i++){
    map.set("item"+i,i)
}
console.time("end of map insertion")