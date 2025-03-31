function solution(ineq, eq, n, m) {
    const operator = {
        '>=': (a,b) => a >= b,
        '<=': (a,b) => a <= b,
        '>!': (a,b) => a > b,
        '<!': (a,b) => a < b,
    }
    
    const op = ineq + eq;
    const answer = operator[op] ? (operator[op](n,m) ? 1 : 0) : 0;
    
    return answer
}