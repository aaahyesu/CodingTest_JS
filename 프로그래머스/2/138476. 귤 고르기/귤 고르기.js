// 숫자 오름차순, 같은 숫자끼리 묶어서 개수 세서 많은 순으로 배열에 담기, 앞에서부터 필요한 귤의 개수만큼 꺼내기
function solution(k, tangerine) {
    // 귤 크기별로 개수 count
    let sizeCount = {}
    tangerine.forEach(size => {
        sizeCount[size] = (sizeCount[size] || 0) +1;
    })
    
    // 크기별로 내림차순 정렬
    let sortedCounts = Object.values(sizeCount).sort((a,b) => b-a)
    let answer = 0
    let selected = 0;
    
    // 많은 것부터 선택해서 k개가 될때 종료
    for(let count of sortedCounts){
        selected += count;
        answer++;
        if(selected >= k) break;
    }
    return answer
    
}