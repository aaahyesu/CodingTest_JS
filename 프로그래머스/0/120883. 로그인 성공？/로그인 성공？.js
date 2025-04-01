function solution(id_pw, db) {
    // id_pw[0]값을 기준으로 db 배열에서 id_pw[0]이 포함된 값 찾기
    for(i=0; i<db.length; i++){
        if(db[i][0] === id_pw[0]){
            if(db[i][1] === id_pw[1]){
                return 'login';
            }else {
                return 'wrong pw';
            }
        }
    }return 'fail'
    
}