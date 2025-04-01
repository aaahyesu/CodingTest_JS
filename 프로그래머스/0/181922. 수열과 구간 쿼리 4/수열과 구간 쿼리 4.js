function solution(arr, queries) {
    for (i=0; i< queries.length; i++){
        let [a,b,c] = queries[i];
        
        for(j=a; j<=b; j++){
            if(j % c === 0){
                arr[j] += 1;
                console.log(arr)
            }
        }
    }
    return arr
}