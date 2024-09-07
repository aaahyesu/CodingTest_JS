def fibo(a):
    if a == 0:
        return 0
    elif a == 1:
        return 1
    
    prev1, prev2 = 1, 0
    for i in range(2, a+1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    return prev1
    
def solution(n):
    return fibo(n) % 1234567
        
        
        
        