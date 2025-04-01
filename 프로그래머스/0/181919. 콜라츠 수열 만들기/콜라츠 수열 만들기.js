function solution(n) {
    let answer = [n];
    
    while(n !== 1){
        if(n % 2 === 1){
            n = 3*n+1;
            
        }else {
            n /= 2;
        }
        answer.push(n)
    }
    return answer
}