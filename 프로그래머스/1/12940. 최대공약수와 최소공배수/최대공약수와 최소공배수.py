

def solution(n, m):
    lcm = LCM(n, m)
    gcd = GCD(n, m)
    return [gcd,lcm]

def GCD(n, m):
    a = max(n,m)
    b = min(n,m)
    while (b>0):
        a,b = b, a%b
    return a

def LCM(n, m):
    gcd = GCD(n, m)
    return abs(n * m) // gcd
        