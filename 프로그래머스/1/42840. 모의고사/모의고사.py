def solution(answers):
    result = [0] * 3
    patterns = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    # answer의 길이와 pattern[i]의 길이를 비교해서 조절 후 비교
    
    for i, answer in enumerate(answers):
        for j, pattern in enumerate(patterns):
            if answer == pattern[i % len(pattern)]:
                result[j] += 1
                
    maxScore = max(result)
    
    highScore = []
    for i, score in enumerate(result):
        if score == maxScore:
            highScore.append(i+1)
    return highScore
    
    return maxScore
    
    
    return answer