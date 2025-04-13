function solution(s) {
    const str = s.split(' ');
    const arr = str.map(Number);
    
    const answer = [Math.min(...arr),Math.max(...arr)]
    return answer.join(' ')
    
    
}