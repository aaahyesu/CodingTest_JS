function solution(numbers, target) {
    let count = 0;
    
    function dfs(i, sum){
        if (i === numbers.length){
            if(sum === target) count++
            return 
        }
        // 더한수
        dfs(i +1, sum +numbers[i])
        // 뺀수
        dfs(i+1, sum - numbers[i])
        
    }
    dfs(0,0)
    return count
}