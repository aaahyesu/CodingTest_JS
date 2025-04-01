function solution(num_list) {
    let last_idx = num_list.length - 1;
    if(num_list[last_idx] > num_list[last_idx-1]){
        num_list.push(num_list[last_idx] - num_list[last_idx-1])
    } else{
        num_list.push(num_list[last_idx] * 2)
    }
   return num_list
}