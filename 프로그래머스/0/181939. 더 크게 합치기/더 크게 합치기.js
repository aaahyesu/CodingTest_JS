function solution(a, b) {
    const result1 = Number(String(a)+String(b))
    const result2 = Number(String(b)+String(a))
    
    if(result1 > result2){
        return result1
    }else{
        return result2
    }
}