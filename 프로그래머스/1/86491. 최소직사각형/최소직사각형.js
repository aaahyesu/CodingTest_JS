function solution(sizes) {
    var w_max =[];
    var h_max =[];
    // w,h 중 하나씩 뽑아서 곱이 최소인 것을 찾으면 된다.
    for(var i=0; i < sizes.length ; i++){
        sizes[i].sort((a,b) => b-a);
        w_max.push(sizes[i][0]);
        h_max.push(sizes[i][1]);
    }
    return Math.max(...h_max) * Math.max(...w_max)
}