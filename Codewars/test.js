// function newFunction(){
//     return new Promise((resolve,reject)=>{
//         reject(new Error("fail"))
//     })
// }
// console.log("hello world")
// newFunction().then((result)=>{
//         console.log("data resolved")
//         console.log(result)
//         }
//     ).catch((error)=>{
//     console.log("data rejected")
//     console.log(error)
//     }
// ).finally(()=>console.log("finish executing"))

// console.log("hello bottom ")
// console.log("hello world")
// fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then((res)=> console.log(res))
// console.log("hello bottom ")


function displayData(){
    console.log("hello world")
    fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then((res)=> console.log(res))
    console.log("hello bottom")

    
}
// displayData()

function add(a,b){
    while(b>=0){
        a = Math.trunc((a*a)/(a-1))
        b--
    }
    return a
}

console.log(add(10,20))