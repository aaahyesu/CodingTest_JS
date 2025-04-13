const object = {
    one: '1',
    two: '2',
    three: '3',
    four : '4',
    five: '5',
    six : '6',
    seven : '7',
    eight: '8',
    nine : '9',
    zero: '0'
}

function solution(s) {
    for (let word in object){
        // 모든 단어 찾기
        const regex = new RegExp(word, 'g')
        s = s.replace(regex, object[word])
    }
    return Number(s)
}