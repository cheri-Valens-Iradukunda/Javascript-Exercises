function count(n) {
    if (n === 0 || n === 1) return 1;

    let digits = 0;
    for (let i = 2; i <= n; i++) {
        digits += Math.log10(i);
    }
    console.log(digits)
    
    return Math.floor(digits) + 1;
}
console.log(count(500000))
