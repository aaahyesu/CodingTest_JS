function solution(s, n) {
    let str = s.split('').map(char => {
        if(char >= 'A' && char <= 'Z'){
            return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0));
        }else if(char >= 'a' && char <= 'z'){
            return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0));
        }else{
            return char
        }
    });
    return str.join('')
    
}