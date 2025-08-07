function wordCount(s) {
  let words = ["a", "the", "on", "at", "of", "upon", "in","as"]
  return s.split(/[^a-zA-Z]+/).filter(elem=>!words.includes(elem.toLowerCase())).length

}

console.log(wordCount("abc123abc123abc"))