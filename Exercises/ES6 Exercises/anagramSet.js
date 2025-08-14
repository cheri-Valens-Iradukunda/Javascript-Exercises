function anagram(word1, word2){
    word1 = new Set([...word1])
    word2 = new Set([...word2])
    return word1.isSubsetOf(word2) && word2.isSubsetOf(word1)
}
console.log(anagram("dog", "gode"))