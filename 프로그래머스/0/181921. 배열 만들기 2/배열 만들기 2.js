function solution(l, r) {
    var answer = [];
    // l이상 r이하 0,5로 이루어진 모든 정수 오름차순 배열
    for(i=l; i<=r; i++){
        if([...String(i)].every(ch => ch === '0' || ch === '5')){
            answer.push(i)
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
}