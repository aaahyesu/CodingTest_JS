function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // 스택의 마지막 문자와 현재 문자가 같으면 제거
    if (stack.length > 0 && stack[stack.length - 1] == s[i]) {
      stack.pop(s[i]);
    } else {
      stack.push(s[i]);
    }
  }
  // 스택이 비어있을 경우 (=짝지어 제거 성공 1) 아닐 경우 0
  return stack.length === 0 ? 1 : 0;
}
