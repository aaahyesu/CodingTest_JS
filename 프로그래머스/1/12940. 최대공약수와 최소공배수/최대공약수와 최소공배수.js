function solution(n, m) {  
    let originM = m;
    let originN = n;
    
    // 최대 공배수
    while(m !== 0){
        let keep = m;
        m = n % m;
        n = keep;
    }
    const gcd = n;
    
    // 최소 공배수
    const lcm = (originN * originM) / gcd;
    
    return [gcd, lcm]
}