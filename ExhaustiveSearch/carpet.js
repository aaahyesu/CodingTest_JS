//타일의 총 개수인 변수 total을 선언하고, 총 개수로 나올 수 있는 합성수의 조합들을 arr배열에 넣고 정답을 구하는 방법.

// 1. 테두리 계산하기
// - 갈색 격자는 테두리이기에 테두리 격자수는

//     `(width * height) - (yellow 격자 수)`로 계산한다.
//     즉, `brown = (width * height) - yellow`

// 2. 가로 세로 관계
//     - 노란 격자의 수는 카펫의 테두리를 고려하여 중앙이 노란색으로 채워지기에
//     `(width -2) * (height -2)` 의 값이 yellow의 값(중앙 개수)이다.
// 3. 완전 탐색
// - **width는 height보다 크거나 같아야 하므로** height를 1부터 증가하며 조건을 만족하는 width를 찾으면 된다.
// - `(yellow +2) / 2` 보다 큰 값에서 height를 찾고 이 height에 대해 width 계산

function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height === 0) {
      let width = total / height;
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}
console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
