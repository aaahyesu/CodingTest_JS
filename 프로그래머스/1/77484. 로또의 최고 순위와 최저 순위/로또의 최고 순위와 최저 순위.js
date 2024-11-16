function solution(lottos, win_nums) {
    // 0의 개수 세기
    let count_0 = lottos.filter(e=> 0 === e).length;
    let matchCount = lottos.filter(e => e !== 0 && win_nums.includes(e)).length;
    
    // 랭크 계산 함수
     const getRank = (count) => {
        return count >= 2 ? 7 - count : 6; // 맞춘 숫자가 2 미만이면 6등
    };
    
    let max_rank = getRank(matchCount+count_0);
    let min_rank = getRank(matchCount)
    
    return [max_rank, min_rank]
}