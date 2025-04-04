function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    let result = arr[0]
    for(let i=0; i< arr.length; i++){
        result = lcm(result,arr[i])
    }
    return result
}