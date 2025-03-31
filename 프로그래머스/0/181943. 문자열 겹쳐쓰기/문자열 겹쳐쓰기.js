function solution(my_string, overwrite_string, s) {
    var answer = '';
    const over_len = overwrite_string.length; // 7
    const str_len = my_string.length;
    
    const str = my_string.slice(0,s); // He
    const last = my_string.slice(s+over_len)
    let result = str+overwrite_string+last
    
    return result
    
}