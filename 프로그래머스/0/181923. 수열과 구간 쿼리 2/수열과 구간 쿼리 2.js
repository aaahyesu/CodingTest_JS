function solution(arr, queries) {
    var answer = [];
    // queries 길이 만큼 반복문 수행
    for(i=0;i<queries.length;i++){
        let [x1,x2,v] = queries[i];
        let minValue = Infinity;
        
        for (j=x1; j <= x2; j++){
            if(arr[j] > v){ // 4 > 2
                minValue = Math.min(minValue,arr[j])
            }
        }
        answer.push(minValue === Infinity ? -1 : minValue)
    }
    return answer;
}