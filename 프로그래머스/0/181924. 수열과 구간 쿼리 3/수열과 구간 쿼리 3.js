function solution(arr, queries) {
    for(i=0; i< queries.length; i++){
        let [a,b] = queries[i];
        
        let keep = arr[a]; // 0
        arr[a] = arr[b]; // 3
        arr[b] = keep;
    }
    return arr
}