def solution(n):
    if n == 0:
        return 1
    elif n == 1:
        return 1
    
    # DP 배열 초기화
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1
    
    # DP 배열 계산
    for i in range(2, n + 1):
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567

    return dp[n]
