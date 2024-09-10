# h이상 인것이 h개 일 확률 구하기..?(h-index)
# 기준을 critations[i]로 반복하고, 반복문을 돌려서 기준보다 큰 것의 개수를 카운트
# 같은 경우를 answer에 저장 후 가장 큰 값을 return 
def solution(citations):
    answer = 0
    citations.sort(reverse=True)
    
    # 반복문을 돌면서 i가 citations[i]보다 큰 경우 갱신
    for i in range(len(citations)):
        if citations[i] >= i+1:
            answer = i +1
    return answer
        