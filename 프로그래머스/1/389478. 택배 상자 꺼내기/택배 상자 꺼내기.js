function solution(n, w, num) {
    let rows = Math.ceil(n / w); // 총 층 수
    let warehouse = Array.from({ length: rows }, () => Array(w).fill(0));

    // 창고에 상자 배치
    let boxNum = 1;
    for (let i = 0; i < rows; i++) {
        if (i % 2 === 0) { // 왼쪽 → 오른쪽
            for (let j = 0; j < w && boxNum <= n; j++) {
                warehouse[i][j] = boxNum++;
            }
        } else { // 오른쪽 → 왼쪽
            for (let j = w - 1; j >= 0 && boxNum <= n; j--) {
                warehouse[i][j] = boxNum++;
            }
        }
    }

    // num의 위치 찾기
    let targetRow = -1, targetCol = -1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < w; j++) {
            if (warehouse[i][j] === num) {
                targetRow = i;
                targetCol = j;
                break;
            }
        }
        if (targetRow !== -1) break;
    }

    // 위쪽 모든 상자 개수 세기
    let count = 0;
    for (let i = targetRow; i < rows; i++) {
        if (warehouse[i][targetCol] !== 0) count++;
    }

    return count;
}
