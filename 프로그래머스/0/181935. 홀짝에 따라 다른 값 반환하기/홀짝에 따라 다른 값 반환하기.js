function solution(n) {
    let answer = 0;

    if (n % 2 === 1) {  // n이 홀수일 때
        for (let i = 1; i <= n; i += 2) {
            answer += i;
        }
    } else {  // n이 짝수일 때
        for (let i = 2; i <= n; i += 2) {
            answer += i * i;
        }
    }

    return answer;
}
