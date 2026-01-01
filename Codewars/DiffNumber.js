function diff(a, b){
  console.log(a,b)
  let differentFromA = a.filter(elem=>!b.includes(elem))
  let differentFromB = b.filter(elem=>!a.includes(elem))
  return Array.from(new Set([...differentFromA, ...differentFromB].sort()))
}