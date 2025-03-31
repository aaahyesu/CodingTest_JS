function solution(a, d, included) {
    let arr = [];
    let answer = 0;
    
    // n의 값 구하기
    for(i=0; i<included.length; i++){
        if(included[i] === true){
            arr.push(i+1)
        }
    }
    
    // 등차수열 합공식 이용하기
    for(j=0; j<arr.length; j++){
        answer += a+d * (arr[j] -1)
    }
    return answer
}