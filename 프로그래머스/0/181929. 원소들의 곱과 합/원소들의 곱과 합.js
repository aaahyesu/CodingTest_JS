function solution(num_list) {
    let multiple = 1;
    let plus = 0;
    for(i=0; i<num_list.length; i++){
        multiple *= num_list[i]
    }
    for(i=0; i<num_list.length; i++){
        plus += num_list[i];
    }
    
    return multiple > plus**2 ? 0 : 1
}