function solution(code) {
    let mode = 0;
    let ret = '';
    
    for(i=0; i<=code.length-1; i++){ // code의 길이만큼 반복문 시작
      if(mode === 0 && code[i] !== '1'){ // code[i]가 1이 아니면 짝수일때만 추가
          if(i % 2 === 0){
              ret += code[i]
          }
      }else if (mode === 0 && code[i] === '1'){
          mode = 1
      }else if (mode === 1 && code[i] !== '1'){
          if(i % 2 == 1){
              ret += code[i]
          }
      }else if(mode === 1 && code[i] === '1'){
          mode = 0
      }
    }
    return ret.length != 0 ? ret : 'EMPTY'
}