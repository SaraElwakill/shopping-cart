

const fib = (n)=>{
    let result = []
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= n; i++) {
        
        result.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return result[n-1]
}
console.log(fib(5))