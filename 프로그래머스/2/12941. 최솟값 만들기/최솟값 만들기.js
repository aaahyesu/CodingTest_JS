function solution(A,B){
    let sortA= A.sort((a,b) => a-b);
    let sortB = B.sort((a,b) => b-a);
    
    const result = sortA.reduce((acc,curr,index) => acc + curr * sortB[index],0)
    
    return result    
    
}
