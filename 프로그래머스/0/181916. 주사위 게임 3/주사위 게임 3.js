function solution(a, b, c, d) {
    let arr = [a, b, c, d];
    let countMap = new Map();
    
    // 배열 순회하며 값 세기 
    arr.forEach(value => {
        countMap.set(value, (countMap.get(value) || 0) + 1);
    });
    
    // entries 사용
    let entries = Array.from(countMap.entries()); // [값, 개수] 쌍의 배열
    
    // 1. 네 주사위 값이 모두 같은 경우 
    if (countMap.size === 1) {
        return 1111 * arr[0];
    }
    
    // 2. 세 주사위 값이 같고 나머지가 다를 때 
    if (countMap.size === 2) {
        for (let [value, count] of entries) {
            if (count === 3) {
                let otherValue = entries.find(entry => entry[1] === 1)[0];
                return Math.pow(10 * value + otherValue, 2);
            }
        }
        
        // 3. 두 개씩 같은 값이 있을 경우 
        if (entries[0][1] === 2 && entries[1][1] === 2) {
            let p = entries[0][0];
            let q = entries[1][0];
            return (p + q) * Math.abs(p - q);
        }
    }
    
    // 4. 두 개는 일치하고 나머지 둘이 다를 때 
    if (countMap.size === 3) {
        // 두 번 등장하는 값 찾기 (페어)
        let pairValue = entries.find(entry => entry[1] === 2)[0];
        
        // 한 번만 등장하는 두 값 찾기
        let singleValues = entries
            .filter(entry => entry[1] === 1)
            .map(entry => entry[0]);
        
        // 한 번만 등장하는 두 값의 곱 반환
        return singleValues[0] * singleValues[1];
    }
    
    // 5. 모두 다를 경우
    return Math.min(...arr);
}